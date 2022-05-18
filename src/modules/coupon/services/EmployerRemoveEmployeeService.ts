import { container, inject, injectable } from 'tsyringe';

import { CouponHandlerService } from '@shared/services/CouponHandlerService';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class EmployerRemoveEmployeeService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const service = container.resolve(CouponHandlerService);

    const { coupon } = await service.execute(id, user, 'employer');

    if (coupon.isFinished || coupon.isPaid) {
      throw new AppError('You cannot remove a employee that finished the job');
    }

    if (!coupon.isOutDeadline) {
      throw new AppError('You cannot remove a employee since deadline is meet');
    }

    await this.couponRepository.employerRemoveEmployee(id, coupon.contract.id);
  }
}
