import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/Coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/Coupon/repositories/ICouponRepository';

@injectable()
export class CreateCouponService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(data: ICouponDTO): Promise<void> {
    await this.couponRepository.create(data);
  }
}
