import { container, inject, injectable } from 'tsyringe';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { CouponHandlerHelper } from '@shared/helpers/CouponHandlerHelper';

@injectable()
export class EmployeeConfirmPaymentService {
  constructor(
    @inject('CouponRepository') private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(CouponHandlerHelper);

    const { coupon } = await helper.execute(id, user, 'employee');

    if (!coupon.isFinished) {
      throw new Error('This job is not finished yet');
    }

    if (coupon.isPaid) {
      throw new Error('You already confirmed that this contract has been paid');
    }

    await this.couponRepository.employeeConfirmPayment(id);
  }
}
