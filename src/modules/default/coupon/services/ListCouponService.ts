import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/default/coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/default/coupon/repositories/ICouponRepository';

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
