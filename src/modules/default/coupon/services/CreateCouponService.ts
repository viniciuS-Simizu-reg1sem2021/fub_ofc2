import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/default/coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/default/coupon/repositories/ICouponRepository';

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
