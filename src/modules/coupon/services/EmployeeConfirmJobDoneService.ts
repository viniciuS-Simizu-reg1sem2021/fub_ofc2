import { container, inject, injectable } from 'tsyringe';

import { CouponHandlerHelper } from '@shared/helpers/CouponHandlerHelper';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';

@injectable()
export class EmployeeConfirmJobDoneService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(CouponHandlerHelper);

    const { coupon } = await helper.execute(id, user, 'employee');

    if (coupon.isFinished) {
      throw new Error('You already finished this job');
    }

    await this.couponRepository.employeeConfirmJobDone(id);
  }
}
