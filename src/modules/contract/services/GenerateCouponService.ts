import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class GenerateCouponService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository,
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(
    id: number,
    couponData: ICouponDTO,
    user: { id: number }
  ): Promise<void> {
    const contract = await this.contractRepository.findById(id);

    if (!contract) {
      throw new Error('Contract not found');
    }

    if (contract.employer.id !== user.id) {
      throw new Error('You do not have permission to approve this contract');
    }

    if (!contract.employee) {
      throw new Error('There is no employee for this contract');
    }

    if (contract.generatedCoupon) {
      throw new Error('You already has generated a coupon for this contract');
    }

    await this.couponRepository.create({ ...couponData, contract });

    await this.contractRepository.generateCoupon(id);
  }
}
