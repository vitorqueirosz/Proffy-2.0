import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';
import CreateUserService from '../services/CreateUserService';
import ensureAuhenticated from '../middlewares/ensureAuthenticate';
import User from '../models/User';

import uploadConfig from '../configs/upload';
import UpdateUserProfile from '../services/UpdateUserProfile';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.get('/', ensureAuhenticated, async (request, response) => {
    const usersRepostory = getRepository(User);

    const id = request.user;

    const user = await usersRepostory.findOne(id);

    delete user?.password;

    return response.json({ user });
});

usersRouter.post('/', async (request, response) => {
    const { name, email, password, bio, whatsapp } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
        name,
        email,
        password,
        bio,
        whatsapp,
    });

    delete user.password;

    return response.json({ user });
});

usersRouter.patch(
    '/profile',
    ensureAuhenticated,
    upload.single('avatar'),
    async (request, response) => {
        const { bio } = request.body;

        const updateUserProfile = new UpdateUserProfile();

        const user = await updateUserProfile.execute({
            bio,
            user_id: request.user.id,
            avatarFilename: request.file?.filename,
        });

        delete user.password;

        return response.json({ user });
    },
);

export default usersRouter;
