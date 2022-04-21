import { inject, injectable } from 'tsyringe';

import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class CreateContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(
    data: IContractDTO,
    user: { id: number }
  ): Promise<void> {
    await this.contractRepository.create({ ...data, employer: user.id });
  }
}
