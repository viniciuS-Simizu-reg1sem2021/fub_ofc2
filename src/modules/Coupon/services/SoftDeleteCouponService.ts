import { inject, injectable } from 'tsyringe';

import { ICouponRepository } from '@modules/Coupon/repositories/ICouponRepository';

@injectable()
export class SoftDeleteCouponService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number): Promise<void> {
    await this.couponRepository.softDelete(id);
  }
}
