import { Router } from 'express'
import { celebrate, Segments } from 'celebrate'
import UserController from '../controllers/UserController'
import createUserSchema from '../../../schemas/createUser.schema'
import updateUserSchema from '../../../schemas/updateUser.schema'

const userRouter = Router()
const userController = new UserController()

userRouter.post(
  '',
  [celebrate({ [Segments.BODY]: createUserSchema }, { abortEarly: false })],
  userController.create
)

userRouter.get('', userController.list)

userRouter.get('/:id', userController.find)

userRouter.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateUserSchema }, { abortEarly: false })],
  userController.update
)

userRouter.delete('/:id', userController.delete)

export default userRouter
