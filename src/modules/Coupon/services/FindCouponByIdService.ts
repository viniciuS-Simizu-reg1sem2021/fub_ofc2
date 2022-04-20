import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/Coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/Coupon/repositories/ICouponRepository';

@injectable()
export class FindCouponByIdService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number): Promise<ICouponDTO> {
    const coupon = await this.couponRepository.findById(id);

    if (!coupon) {
      throw new Error('Coupon does not exists');
    }

    return coupon;
  }
}
