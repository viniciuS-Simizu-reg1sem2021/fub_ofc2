import { inject, injectable } from 'tsyringe';

import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class ConfirmPaymentService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const contract = await this.contractRepository.findById(id);

    if (!contract) {
      throw new Error('Contract not found');
    }

    // @ts-ignore
    if (contract.employee !== user.id) {
      throw new Error('You are not selected as employee for this contract');
    }

    if (!contract.generatedCoupon) {
      throw new Error('You cannot confirm the payment, coupon not generated');
    }

    if (contract.isPaid) {
      throw new Error('You already confirmed that this contract has been paid');
    }

    await this.contractRepository.confirmPayment(id);
  }
}
