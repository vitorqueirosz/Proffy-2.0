import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Connections from '../models/Connection';

class ConnectionController {
    public async execute(request: Request, response: Response) {
        const { id } = request.body;

        const connectionsRepository = getRepository(Connections);

        const connections = connectionsRepository.count();

        return response.json(connections);
    }
}

export default ConnectionController;
