import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import User from '../models/User';

import uploadConfig from '../configs/upload';

interface Request {
    user_id: string;
    avatarFilename: string;
    bio: string;
}

class UpdateUserProfile {
    public async execute({
        user_id,
        avatarFilename,
        bio,
    }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne(user_id);

        if (!user) {
            throw new Error('Only authenticated users can change.');
        }

        if (user.avatar) {
            const userAvatarFilePath = path.join(
                uploadConfig.directory,
                user.avatar,
            );

            const userAvatarFileExists = await fs.promises.stat(
                userAvatarFilePath,
            );

            if (userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFilename;
        user.bio = bio;

        await usersRepository.save(user);

        return user;
    }
}

export default UpdateUserProfile;
