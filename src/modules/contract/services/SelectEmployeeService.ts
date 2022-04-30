import { container, inject, injectable } from 'tsyringe';

import { ContractApplicationService } from '@shared/services/ContractApplicationService';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class SelectEmployeeService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(
    id: number,
    user: { id: number },
    selectedUserId: number
  ): Promise<void> {
    const service = container.resolve(ContractApplicationService);

    const { contract, selectedUser } = await service.execute(
      id,
      user,
      selectedUserId
    );

    if (contract.employer.id !== user.id) {
      throw new Error(
        'You do not have permission to select the employee for this contract'
      );
    }

    await this.contractRepository.selectEmployee(id, selectedUser);
  }
}
