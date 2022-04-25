import { inject, injectable } from 'tsyringe';

import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class UpdateContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(
    id: number,
    data: Partial<IContractDTO>,
    user: { id: number }
  ): Promise<void> {
    const contract = await this.contractRepository.findById(id);

    if (!contract) {
      throw new Error('Contract not found');
    }

    // @ts-ignore
    if (contract.statusContract === 2 || contract.statusContract === 3) {
      throw new Error('You cannot modify this contract');
    }

    // @ts-ignore
    if (contract.employer !== user.id) {
      throw new Error('You do not have permission to modify this contract');
    }

    await this.contractRepository.update(id, data);
  }
}
