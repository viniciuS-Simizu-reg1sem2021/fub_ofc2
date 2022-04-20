import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/Coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/Coupon/repositories/ICouponRepository';

@injectable()
export class ListCouponService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(): Promise<ICouponDTO[]> {
    return this.couponRepository.list();
  }
}
