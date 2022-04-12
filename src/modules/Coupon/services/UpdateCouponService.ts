import { inject, injectable } from 'tsyringe'
import CouponRepository from '../infra/typeorm/repositories/CouponRepository'
import ICouponDTO from '../dtos/ICouponDTO'
import { UpdateResult } from 'typeorm'

@injectable()
export default class UpdateCouponService {
  constructor(
    @inject(CouponRepository) private couponRepository: CouponRepository
  ) {}

  public async execute(id: number, data: ICouponDTO): Promise<UpdateResult> {
    return this.couponRepository.update(id, data)
  }
}
