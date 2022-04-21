import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/default/coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/default/coupon/repositories/ICouponRepository';

@injectable()
export class UpdateCouponService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number, data: Partial<ICouponDTO>): Promise<void> {
    return this.couponRepository.update(id, data);
  }
}
