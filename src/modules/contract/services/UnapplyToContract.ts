import { container, inject, injectable } from 'tsyringe';

import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { RetrieveUsersAndContractHelper } from '@shared/helpers/RetrieveUsersAndContractHelper';

@injectable()
export class UnapplyToContract {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(RetrieveUsersAndContractHelper);

    const { userInfo } = await helper.execute(id, user);

    await this.contractRepository.unapplyToContract(id, userInfo);
  }
}
