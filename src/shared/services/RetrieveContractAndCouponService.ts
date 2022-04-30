import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/coupon/dtos/ICouponDTO';
import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

type ContractAndCoupon = {
  coupon: ICouponDTO;
  contract: IContractDTO;
};

@injectable()
export class RetrieveContractAndCouponService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository,
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number): Promise<ContractAndCoupon> {
    const coupon = await this.couponRepository.findById(id);

    if (!coupon) {
      throw new Error('Contract not found');
    }

    if (!coupon.isPaid) {
      throw new Error('This coupon is not paid yet');
    }

    const contract = await this.contractRepository.findById(
      Number(coupon.contract.id)
    );

    if (!contract) {
      throw new Error('Contract not found');
    }

    return { coupon, contract };
  }
}
