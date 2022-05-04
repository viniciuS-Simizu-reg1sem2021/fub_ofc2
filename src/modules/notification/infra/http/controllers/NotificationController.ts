import { container, injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { ListNotificationService } from '@modules/notification/services/ListNotificationService';
import { CreateNotificationService } from '@modules/notification/services/CreateNotificationService';
import { UpdateNotificationService } from '@modules/notification/services/UpdateNotificationService';
import { FindNotificationByIdService } from '@modules/notification/services/FindNotificationByIdService';
import { SoftDeleteNotificationService } from '@modules/notification/services/SoftDeleteNotificationService';
import { FindNotificationByUserService } from '@modules/notification/services/FindNotificationByUserService';

@injectable()
export class NotificationController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const service = container.resolve(CreateNotificationService);

      const data = request.body;

      response.status(201).json(await service.execute(data));
    } catch (err) {
      next(err);
    }
  }

  public async list(request: Request, response: Response, next: NextFunction) {
    try {
      const service = container.resolve(ListNotificationService);

      response.json(await service.execute());
    } catch (err) {
      next(err);
    }
  }

  public async findById(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const service = container.resolve(FindNotificationByIdService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }

  public async findByUser(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(FindNotificationByUserService);

      const { user } = request.token.sub;

      response.json(await service.execute(user));
    } catch (err) {
      next(err);
    }
  }

  public async update(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const service = container.resolve(UpdateNotificationService);

      const { id } = request.params;
      const data = request.body;

      response.json(await service.execute(Number(id), data));
    } catch (err) {
      next(err);
    }
  }

  public async softDelete(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const service = container.resolve(SoftDeleteNotificationService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }
}
