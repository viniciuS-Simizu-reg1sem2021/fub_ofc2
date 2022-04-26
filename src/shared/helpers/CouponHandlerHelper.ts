import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

interface CouponHandlerRetrievedInfo {
  coupon: ICouponDTO;
}

@injectable()
export class CouponHandlerHelper {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository,
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(
    id: number,
    user: { id: number },
    userType: string
  ): Promise<CouponHandlerRetrievedInfo> {
    const coupon = await this.couponRepository.findById(id);

    if (!coupon) {
      throw new Error('Coupon not found');
    }

    // @ts-ignore
    const contract = await this.contractRepository.findById(coupon.contract);

    if (!contract) {
      throw new Error('Contract not found');
    }

    switch (userType) {
      case 'employee':
        // @ts-ignore
        if (contract.employee !== user.id) {
          throw new Error('You cannot finalize a job that is not yours');
        }

        break;

      case 'employer':
        // @ts-ignore
        if (contract.employer !== user.id) {
          throw new Error('You cannot edit a job that is not yours');
        }

        break;

      default:
        throw new Error('User type not found');
    }

    return { coupon };
  }
}
