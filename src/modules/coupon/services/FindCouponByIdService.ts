import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class FindCouponByIdService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number): Promise<ICouponDTO> {
    const coupon = await this.couponRepository.findById(id);

    if (!coupon) {
      throw new AppError('coupon not found');
    }

    return coupon;
  }
}
