import { getRepository } from 'typeorm';
import Connections from '../models/Connection';

interface Request {
    user_id: string;
}

class CreateConnections {
    public async execute({ user_id }: Request): Promise<Connections> {
        const connectionsRepository = getRepository(Connections);

        const connections = connectionsRepository.create({
            user_id,
        });

        await connectionsRepository.save(connections);

        return connections;
    }
}

export default CreateConnections;
