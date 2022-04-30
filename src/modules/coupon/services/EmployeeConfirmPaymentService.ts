import { container, inject, injectable } from 'tsyringe';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { CouponHandlerService } from '@shared/services/CouponHandlerService';

@injectable()
export class EmployeeConfirmPaymentService {
  constructor(
    @inject('CouponRepository') private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const service = container.resolve(CouponHandlerService);

    const { coupon } = await service.execute(id, user, 'employee');

    if (!coupon.isFinished) {
      throw new Error('This job is not finished yet');
    }

    if (coupon.isPaid) {
      throw new Error('You already confirmed that this contract has been paid');
    }

    await this.couponRepository.employeeConfirmPayment(id);
  }
}
