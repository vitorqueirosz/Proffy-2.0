// import { Router } from 'express';
// import CreateClasseService from '../services/CreateClassesService';

// const classesRouter = Router();

// classesRouter.post('/', async (request, response) => {
//     const { subject, schedule, cost } = request.body;

//     const createClasses = new CreateClasseService();

//     const classes = await createClasses.execute({
//         subject,
//         cost,
//         schedule,
//     });

//     return response.json(classes);
// });

// export default classesRouter;
