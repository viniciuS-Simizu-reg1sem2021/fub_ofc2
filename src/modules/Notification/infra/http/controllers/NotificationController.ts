import { container, injectable } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'
import CreateNotificationService from '@modules/Notification/services/CreateNotificationService'
import INotificationDTO from '@modules/Notification/dtos/INotificationDTO'
import ListNotificationService from '@modules/Notification/services/ListNotificationService'
import FindNotificationService from '@modules/Notification/services/FindNotificationService'
import UpdateNotificationService from '@modules/Notification/services/UpdateNotificationService'
import DeleteNotificationService from '@modules/Notification/services/DeleteNotificationService'

@injectable()
export default class NotificationController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const service = container.resolve(CreateNotificationService)

      const data = request.body

      response.json(await service.execute(data as INotificationDTO))
    } catch (err) {
      next(err)
    }
  }

  public async list(request: Request, response: Response, next: NextFunction) {
    try {
      const service = container.resolve(ListNotificationService)

      response.json(await service.execute())
    } catch (err) {
      next(err)
    }
  }

  public async find(request: Request, response: Response, next: NextFunction) {
    try {
      const service = container.resolve(FindNotificationService)

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
  ) {
    try {
      const service = container.resolve(UpdateNotificationService)

      const { id } = request.params
      const data = request.body

      response.json(await service.execute(Number(id), data as INotificationDTO))
    } catch (err) {
      next(err)
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const service = container.resolve(DeleteNotificationService)

      const { id } = request.params

      response.json(await service.execute(Number(id)))
    } catch (err) {
      next(err)
    }
  }
}
