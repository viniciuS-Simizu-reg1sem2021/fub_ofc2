import { container, injectable } from 'tsyringe'
import ICouponDTO from '../../../dtos/ICouponDTO'
import { NextFunction, Request, Response } from 'express'
import ListCouponService from '../../../services/ListCouponService'
import FindCouponService from '../../../services/FindCouponService'
import UpdateCouponService from '../../../services/UpdateCouponService'
import DeleteCouponService from '../../../services/DeleteCouponService'
import CreateCouponService from '../../../services/CreateCouponService'

@injectable()
export default class CouponController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(CreateCouponService)

      const data = request.body

      response.json(await service.execute(data as ICouponDTO))
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
      const service = container.resolve(ListCouponService)

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
      const service = container.resolve(FindCouponService)

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
      const service = container.resolve(UpdateCouponService)

      const { id } = request.params
      const data = request.body

      response.json(await service.execute(Number(id), data as ICouponDTO))
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
      const service = container.resolve(DeleteCouponService)

      const { id } = request.params

      response.json(await service.execute(Number(id)))
    } catch (err) {
      next(err)
    }
  }
}
