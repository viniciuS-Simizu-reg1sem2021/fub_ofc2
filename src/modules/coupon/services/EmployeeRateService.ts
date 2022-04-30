import { container, inject, injectable } from 'tsyringe';

import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { RetrieveContractAndCouponService } from '@shared/services/RetrieveContractAndCouponService';

@injectable()
export class EmployeeRateService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(
    id: number,
    ratingId: number,
    user: { id: number }
  ): Promise<void> {
    const service = container.resolve(RetrieveContractAndCouponService);

    const { coupon, contract } = await service.execute(id);

    if (contract.employee.id !== user.id) {
      throw new Error('You can not rate this employee');
    }

    if (coupon.employeeRating) {
      throw new Error('You already rated this job');
    }

    await this.couponRepository.employeeRateEmployer(
      id,
      ratingId,
      Number(contract.employer.id)
    );
  }
}
