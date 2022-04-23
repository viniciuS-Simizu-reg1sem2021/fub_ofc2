import { inject, injectable } from 'tsyringe';

import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class SoftDeleteContractService {
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
    if (contract.statusContract === 2) {
      throw new Error('You cannot delete a contract tha have an employee');
    }

    // @ts-ignore
    if (contract.statusContract === 3) {
      throw new Error('You cannot delete a finished contract');
    }

    // @ts-ignore
    if (contract.employer !== user.id) {
      throw new Error(
        'You do not have permission to select the employee for this contract'
      );
    }

    await this.contractRepository.softDelete(id);
  }
}
