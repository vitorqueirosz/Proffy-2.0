// import { getRepository } from 'typeorm';
// import convertHourToMinutes from '../utils/convertHourToMinutes';
// import Class from '../models/Class';
// import Schedule from '../models/Schedule';

// interface ScheduleItem {
//     week_day: number;
//     from: string;
//     to: string;
// }

// interface Request {
//     schedule: ScheduleItem[];
//     subject: string;
//     cost: number;
// }

// class CreateClasseService {
//     public async execute({
//         subject,
//         cost,
//         schedule,
//     }: Request): Promise<{ classe: Class; schedules: Schedule }> {
//         const classesRepository = getRepository(Class);

//         // CHECK
//         const classe = classesRepository.create({
//             subject,
//             cost,
//             // user_id
//         });

//         await classesRepository.save(classe);

//         // const classInfo = await classesRepository.findOne({
//         //     where: { user_id },
//         // });
//         // const class_id = classInfo?.id;

//         const scheduleRepository = getRepository(Schedule);

//         const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
//             return {
//                 // class_id,
//                 week_day: scheduleItem.week_day,
//                 from: convertHourToMinutes(scheduleItem.from),
//                 to: convertHourToMinutes(scheduleItem.to),
//             };
//         });

//         const schedules = scheduleRepository.create(classSchedule);

//         await scheduleRepository.save(schedules);

//         // const createSchedule =

//         return {
//             classe,
//             schedules,
//         };
//     }
// }

// export default CreateClasseService;
