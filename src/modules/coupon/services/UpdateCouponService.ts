import { container, inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { CouponHandlerHelper } from '@shared/helpers/CouponHandlerHelper';

@injectable()
export class UpdateCouponService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(
    id: number,
    user: { id: number },
    data: Partial<ICouponDTO>
  ): Promise<void> {
    const helper = container.resolve(CouponHandlerHelper);

    const { coupon } = await helper.execute(id, user, 'employer');

    if (!coupon.isOutDeadline) {
      throw new Error('You cannot modify a contract since deadline is meet');
    }

    return this.couponRepository.update(id, data);
  }
}
