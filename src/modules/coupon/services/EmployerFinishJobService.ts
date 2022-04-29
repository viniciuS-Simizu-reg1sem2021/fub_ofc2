import { container, inject, injectable } from 'tsyringe';

import { CouponHandlerHelper } from '@shared/helpers/CouponHandlerHelper';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';

@injectable()
export class EmployerFinishJobService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(CouponHandlerHelper);

    const { coupon } = await helper.execute(id, user, 'employer');

    if (!coupon.isFinished) {
      throw new Error('Employee did not confirmed that job was done');
    }

    if (!coupon.isPaid) {
      throw new Error('Employee did not confirmed the payment');
    }

    await this.couponRepository.employerFinishJob(id, coupon.contract.id);
  }
}
