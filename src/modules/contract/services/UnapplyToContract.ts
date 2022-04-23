import { container, inject, injectable } from 'tsyringe';

import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { ApplicationAndSelectionToContractHelper } from '@shared/helpers/ApplicationAndSelectionToContractHelper';

@injectable()
export class UnapplyToContract {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(ApplicationAndSelectionToContractHelper);

    const { userInfo } = await helper.execute(id, user);

    await this.contractRepository.unapplyToContract(id, userInfo);
  }
}
