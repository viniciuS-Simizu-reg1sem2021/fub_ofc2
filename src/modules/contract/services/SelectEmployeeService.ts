import { container, inject, injectable } from 'tsyringe';

import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { RetrieveContractAndFoundUserHelper } from '@shared/helpers/RetrieveContractAndFoundUserHelper';

@injectable()
export class SelectEmployeeService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(RetrieveContractAndFoundUserHelper);

    const { contract, foundUser } = await helper.execute(id, user);

    // TODO: MUDAR O STATUS DO CONTRATO TAMBÉM - CRIAR UM MÉTODO NO REPOSITÓRIO QUE FAÇA ESSE UPDATE
    await this.contractRepository.update(id, {
      ...contract,
      employee: foundUser,
    });
  }
}
