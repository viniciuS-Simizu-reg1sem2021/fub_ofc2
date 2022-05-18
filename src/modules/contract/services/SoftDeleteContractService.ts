import { inject, injectable } from 'tsyringe';

import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class SoftDeleteContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const contract = await this.contractRepository.findById(id);

    if (!contract) {
      throw new AppError('Contract not found');
    }

    if (contract.statusContract.id === 2 || contract.statusContract.id === 3) {
      throw new AppError('You cannot delete a contract that have an employee');
    }

    if (contract.statusContract.id === 4) {
      throw new AppError('You cannot delete a finished contract');
    }

    if (contract.employer.id !== user.id) {
      throw new AppError(
        'You do not have permission to select the employee for this contract'
      );
    }

    await this.contractRepository.softDelete(id);
  }
}
