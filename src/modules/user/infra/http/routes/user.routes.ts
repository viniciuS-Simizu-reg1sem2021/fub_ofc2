import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';

import { uploads } from '@shared/infra/middlewares/upload';
import { loginSchema } from '@modules/user/schemas/login.schema';
import { createUserSchema } from '@modules/user/schemas/createUser.schema';
import { updateUserSchema } from '@modules/user/schemas/updateUser.schema';
import { UserController } from '@modules/user/infra/http/controllers/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post(
  '',
  uploads.single('profilePicture'),
  [celebrate({ [Segments.BODY]: createUserSchema }, { abortEarly: false })],
  userController.create
);

userRoutes.post(
  '/login',
  [celebrate({ [Segments.BODY]: loginSchema }, { abortEarly: false })],
  userController.login
);

userRoutes.get('', userController.list);

userRoutes.get('/:id', userController.findById);

userRoutes.put(
  '/:id',
  uploads.single('profilePicture'),
  [celebrate({ [Segments.BODY]: updateUserSchema }, { abortEarly: false })],
  userController.update
);

userRoutes.delete('/:id', userController.delete);

export { userRoutes };
