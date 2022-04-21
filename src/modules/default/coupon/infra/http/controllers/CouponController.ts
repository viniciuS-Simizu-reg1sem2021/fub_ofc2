import { container, injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { ListCouponService } from '@modules/default/coupon/services/ListCouponService';
import { CreateCouponService } from '@modules/default/coupon/services/CreateCouponService';
import { UpdateCouponService } from '@modules/default/coupon/services/UpdateCouponService';
import { FindCouponByIdService } from '@modules/default/coupon/services/FindCouponByIdService';
import { SoftDeleteCouponService } from '@modules/default/coupon/services/SoftDeleteCouponService';

@injectable()
export class CouponController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(CreateCouponService);

      const data = request.body;

      response.status(201).json(await service.execute(data));
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
      const service = container.resolve(ListCouponService);

      response.json(await service.execute());
    } catch (err) {
      next(err);
    }
  }

  public async find(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(FindCouponByIdService);

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
      const service = container.resolve(UpdateCouponService);

      const { id } = request.params;
      const data = request.body;

      response.json(await service.execute(Number(id), data));
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
      const service = container.resolve(SoftDeleteCouponService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }
}
