import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
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
      throw new AppError('Contract not found');
    }

    if (contract.statusContract.id === 2 || contract.statusContract.id === 3) {
      throw new AppError('You cannot modify this contract');
    }

    if (contract.employer.id !== user.id) {
      throw new AppError('You do not have permission to modify this contract');
    }

    await this.contractRepository.update(id, data);
  }
}
