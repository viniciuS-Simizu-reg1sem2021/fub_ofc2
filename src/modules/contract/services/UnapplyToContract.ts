import { container, inject, injectable } from 'tsyringe';

import { ContractApplicationHelper } from '@shared/helpers/ContractApplicationHelper';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class UnapplyToContract {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(ContractApplicationHelper);

    const { userInfo } = await helper.execute(id, user);

    await this.contractRepository.unapplyToContract(id, userInfo);
  }
}
