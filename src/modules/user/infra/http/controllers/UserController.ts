import { container, injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { ListUserService } from '@modules/user/services/ListUserService';
import { LoginUserService } from '@modules/user/services/LoginUserService';
import { UpdateUserService } from '@modules/user/services/UpdateUserService';
import { CreateUserService } from '@modules/user/services/CreateUserService';
import { FindUserByIdService } from '@modules/user/services/FindUserByIdService';
import { ChangePasswordService } from '@modules/user/services/ChangePasswordService';
import { SoftDeleteUserService } from '@modules/user/services/SoftDeleteUserService';
import { RecoverPasswordService } from '@modules/user/services/RecoverPasswordService';

@injectable()
export class UserController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(CreateUserService);

      const data = request.body;
      const img = request.file;

      response.status(201).json(await service.execute(data, img));
    } catch (err) {
      next(err);
    }
  }

  public async login(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(LoginUserService);

      const loginRequest = request.body;

      response.json({ auth: true, token: await service.execute(loginRequest) });
    } catch (err) {
      next(err);
    }
  }

  public async recoverPassword(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(RecoverPasswordService);

      const { email } = request.body;

      response.json(await service.execute(email));
    } catch (err) {
      next(err);
    }
  }

  public async changePassword(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(ChangePasswordService);

      const { id, token } = request.params;
      const data = request.body;

      response.json(await service.execute(Number(id), token, data));
    } catch (err) {
      next(err);
    }
  }

  public async list(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(ListUserService);

      response.json(await service.execute());
    } catch (err) {
      next(err);
    }
  }

  public async findById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(FindUserByIdService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }

  public async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(UpdateUserService);

      const { id } = request.params;
      const data = request.body;
      const img = request.file;

      response.json(await service.execute(Number(id), data, img));
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(SoftDeleteUserService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }
}
