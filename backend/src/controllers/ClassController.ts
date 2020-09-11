import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';
import Schedule from '../models/Schedule';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface CreateSchedule {
    week_day: number;
    from: string;
    to: string;
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

        // const classInfo = await classRepository.findOne({
        //     where: { user_id },
        // });

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

        // const classes = await classRepository.findOne()

        console.log(timeInMinutes);

        const classSchedule = await classRepository
            .createQueryBuilder('class_schedule')
            .where('class_schedule.week_day = :week_day', { week_day })
            .andWhere('class_schedule.from <= :timeInMinutes', {
                timeInMinutes,
            })
            // .andWhere('class_schedule.to > :timeInMinutes', {
            //     timeInMinutes,
            // })
            .getMany();

        return response.json(classSchedule);
    }
}

export default ClassController;
