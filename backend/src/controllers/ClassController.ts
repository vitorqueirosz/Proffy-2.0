import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Class from '../models/Class';
import ClassSchedule from '../models/Schedule';

import Schedule from '../models/Schedule';
import User from '../models/User';
import convertDayToWeekDay from '../utils/convertDayToWeekDay';
import convertHourToMinutes from '../utils/convertHourToMinutes';
import conmvertMinutesToHour from '../utils/convertMinutesToHours';

interface ScheduleItem {
    id: string;
    class_id: string;
    user_id: string;

    week_day: number;
    from: string;
    to: string;

    user: {
        id: string;
        name: string;
        email: string;
    };
    class: {
        subject: string;
    };
}

class ClassController {
    public async execute(request: Request, response: Response) {
        const { subject, cost, schedule } = request.body;

        const classRepository = getRepository(Class);
        const scheduleClassRepository = getRepository(Schedule);

        const user_id = request.user.id;

        const classes = classRepository.create({
            subject,
            cost,
            user_id,
        });

        await classRepository.save(classes);

        const class_id = classes.id;

        const classSchedule = schedule.map((scheduleItem: Schedule) => {
            return {
                class_id,
                user_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to),
            };
        });

        const scheduleClass = scheduleClassRepository.create(classSchedule);

        await scheduleClassRepository.save(scheduleClass);

        const updatedSchedule = classSchedule.map((item: Schedule) => ({
            class_id: item.class_id,
            week_day: item.week_day,
            from: item.from,
            to: item.to,
        }));

        return response.json({ classes, schedule: updatedSchedule });
    }

    public async index(request: Request, response: Response) {
        const classRepository = getRepository(Schedule);
        const classesRepository = getRepository(Class);
        const usersRepository = getRepository(User);

        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.subject || !filters.week_day || !filters.time) {
            return response
                .status(400)
                .json({ error: 'Missing filter to search classes' });
        }

        const timeInMinutes = convertHourToMinutes(time);

        const classesSchedule = await classesRepository
            .createQueryBuilder('classes')
            .where('classes.subject = :subject', { subject })
            .getMany();

        console.log(classesSchedule);

        if (classesSchedule.length !== 0 && timeInMinutes) {
            const classSchedule = await classRepository
                .createQueryBuilder('class_schedule')
                .where('class_schedule.week_day = :week_day', { week_day })
                .where('class_schedule.from <= :timeInMinutes', {
                    timeInMinutes,
                })
                .orWhere('class_schedule.to > :timeInMinutes', {
                    timeInMinutes,
                })
                .innerJoinAndSelect('class_schedule.user', 'users')
                .innerJoinAndSelect('class_schedule.class', 'class')
                .getMany();

            const schedules = classSchedule
                .filter(
                    (item: ScheduleItem) =>
                        item.class.subject === subject &&
                        item.week_day === week_day && {
                            ...item,
                        },
                )
                .map((item: Schedule) => ({
                    ...item,
                    week_day: convertDayToWeekDay(Number(item.week_day)),
                    from: conmvertMinutesToHour(Number(item.from)),
                    to: conmvertMinutesToHour(Number(item.to)),
                }));

            return response.json({ schedules });
        }

        return response.json();
    }
}

export default ClassController;
