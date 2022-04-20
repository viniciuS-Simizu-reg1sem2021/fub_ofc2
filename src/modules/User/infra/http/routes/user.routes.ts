import { Router } from 'express';
import uploads from '@shared/infra/middlewares/upload';
import { celebrate, Segments } from 'celebrate';
import UserController from '../controllers/UserController';
import loginSchema from '@modules/User/schemas/login.schema';
import createUserSchema from '../../../schemas/createUser.schema';
import updateUserSchema from '../../../schemas/updateUser.schema';

const userRouter = Router();
const userController = new UserController();

userRouter.post(
  '',
  uploads.single('profilePicture'),
  [celebrate({ [Segments.BODY]: createUserSchema }, { abortEarly: false })],
  userController.create
);

userRouter.post(
  '/login',
  [celebrate({ [Segments.BODY]: loginSchema }, { abortEarly: false })],
  userController.login
);

userRouter.get('', userController.list);

userRouter.get('/:id', userController.find);

userRouter.put(
  '/:id',
  uploads.single('profilePicture'),
  [celebrate({ [Segments.BODY]: updateUserSchema }, { abortEarly: false })],
  userController.update
);

userRouter.delete('/:id', userController.delete);

export default userRouter;
