import { inject, injectable } from 'tsyringe'
import CouponRepository from '../infra/typeorm/repositories/CouponRepository'
import ICouponDTO from '../dtos/ICouponDTO'
import CouponEntity from '../infra/typeorm/entities/CouponEntity'

@injectable()
export default class CreateCouponService {
  constructor(
    @inject(CouponRepository) private couponRepository: CouponRepository
  ) {}

  public async execute(data: ICouponDTO): Promise<CouponEntity> {
    return this.couponRepository.create(data)
  }
}
