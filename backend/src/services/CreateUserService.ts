import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

interface Request {
    name: string;
    email: string;
    password: string;
    bio: string;
    whatsapp: number;
}

class CreateUserService {
    public async execute({
        name,
        email,
        password,
        bio,
        whatsapp,
    }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const checkUserExist = await usersRepository.findOne({
            where: { email },
        });

        if (checkUserExist) {
            throw new Error('Email adress already used');
        }

        const hashPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashPassword,
            bio,
            whatsapp,
        });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;
