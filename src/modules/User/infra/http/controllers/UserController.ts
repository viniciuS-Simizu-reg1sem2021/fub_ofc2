import IUserDTO from '../../../dtos/IUserDTO'
import { container, injectable } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'
import ListUserService from '../../../services/ListUserService'
import FindUserService from '../../../services/FindUserService'
import CreateUserService from '../../../services/CreateUserService'
import UpdateUserService from '../../../services/UpdateUserService'
import DeleteUserService from '../../../services/DeleteUserService'

@injectable()
export default class UserController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(CreateUserService)

      const data = request.body

      response.json(await service.execute(data as IUserDTO))
    } catch (err) {
      next(err)
    }
  }

  public async list(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(ListUserService)

      response.json(await service.execute())
    } catch (err) {
      next(err)
    }
  }

  public async find(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(FindUserService)

      const { id } = request.params

      response.json(await service.execute(Number(id)))
    } catch (err) {
      next(err)
    }
  }

  public async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(UpdateUserService)

      const { id } = request.params
      const data = request.body

      response.json(await service.execute(Number(id), data as IUserDTO))
    } catch (err) {
      next(err)
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(DeleteUserService)

      const { id } = request.params

      response.json(await service.execute(Number(id)))
    } catch (err) {
      next(err)
    }
  }
}
