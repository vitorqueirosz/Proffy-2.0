import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Connections from '../models/Connection';
import CreateConnections from '../services/CreateConnections';

const connectionsRouter = Router();

connectionsRouter.post('/', async (request: Request, response: Response) => {
    const { user_id } = request.body;

    const connections = new CreateConnections();

    connections.execute({
        user_id,
    });

    return response.send();
});

connectionsRouter.get('/', async (request: Request, response: Response) => {
    const connectionsRepository = getRepository(Connections);

    const totalConnections = await connectionsRepository.count();

    return response.json({ total: totalConnections });
});

export default connectionsRouter;
