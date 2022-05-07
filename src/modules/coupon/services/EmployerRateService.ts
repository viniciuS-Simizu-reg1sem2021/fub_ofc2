import { container, inject, injectable } from 'tsyringe';

import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { RetrieveContractAndCouponService } from '@shared/services/RetrieveContractAndCouponService';
import { GenerateNotificationOfContractService } from '@shared/services/GenerateNotificationOfContractService';

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
    const service = container.resolve(RetrieveContractAndCouponService);

    const { coupon, contract } = await service.execute(id);

    if (contract.employer.id !== user.id) {
      throw new Error('You can not rate this employee');
    }

    if (coupon.employerRating) {
      throw new Error('You already rated this job');
    }

    await this.couponRepository.employerRateEmployee(
      id,
      ratingId,
      Number(contract.employee.id)
    );

    const notificationService = container.resolve(
      GenerateNotificationOfContractService
    );

    await notificationService.execute(
      contract,
      `The user ${contract.employer.name} has rated your service about the contract ${contract.title}`,
      contract.employee.id as unknown as { id: number }
    );
  }
}
