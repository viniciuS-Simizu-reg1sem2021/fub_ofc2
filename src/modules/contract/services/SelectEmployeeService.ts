import { container, inject, injectable } from 'tsyringe';

import { ContractApplicationHelper } from '@shared/helpers/ContractApplicationHelper';
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
    const helper = container.resolve(ContractApplicationHelper);

    const { contract, selectedUser } = await helper.execute(
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
