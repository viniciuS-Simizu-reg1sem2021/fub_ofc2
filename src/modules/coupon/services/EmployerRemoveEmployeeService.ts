import { container, inject, injectable } from 'tsyringe';

import { CouponHandlerHelper } from '@shared/helpers/CouponHandlerHelper';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';

@injectable()
export class EmployerRemoveEmployeeService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(CouponHandlerHelper);

    const { coupon } = await helper.execute(id, user, 'employer');

    if (coupon.isFinished || coupon.isPaid) {
      throw new Error('You cannot remove a employee that finished the job');
    }

    if (!coupon.isOutDeadline) {
      throw new Error('You cannot remove a employee since deadline is meet');
    }

    await this.couponRepository.employerRemoveEmployee(id, coupon.contract.id);
  }
}
