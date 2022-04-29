import { inject, injectable } from 'tsyringe';

import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';

@injectable()
export class EmployerRateService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(
    id: number,
    ratingId: number,
    user: { id: number }
  ): Promise<void> {
    const coupon = await this.couponRepository.findById(id);

    if (!coupon) {
      throw new Error('Contract not found');
    }

    if (coupon.contract.employer.id !== user.id) {
      throw new Error('You can not rate this employee');
    }

    if (!coupon.isPaid) {
      throw new Error('This coupon is not paid yet');
    }

    await this.couponRepository.employerRateEmployee(
      id,
      ratingId,
      coupon.contract.employee.id
    );
  }
}
