import { container, inject, injectable } from 'tsyringe';

import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { RetrieveUsersAndContractHelper } from '@shared/helpers/RetrieveUsersAndContractHelper';

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
    const helper = container.resolve(RetrieveUsersAndContractHelper);

    const { contract, selectedUser } = await helper.execute(
      id,
      user,
      selectedUserId
    );

    // @ts-ignore
    if (contract.employer !== user.id) {
      throw new Error(
        'You do not have permission to select the employee for this contract'
      );
    }

    await this.contractRepository.selectEmployee(id, selectedUser);
  }
}
