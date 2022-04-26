import { container, inject, injectable } from 'tsyringe';

import { CouponHandlerHelper } from '@shared/helpers/CouponHandlerHelper';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';

@injectable()
export class EmployeeDisproveJobDoneService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(CouponHandlerHelper);

    const { coupon } = await helper.execute(id, user, 'employee');

    if (!coupon.isFinished) {
      throw new Error('This job is not finished yet');
    }

    await this.couponRepository.employeeDisproveJobDone(id);
  }
}
