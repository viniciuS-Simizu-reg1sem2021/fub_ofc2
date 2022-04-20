import { inject, injectable } from 'tsyringe';

import { IContractDTO } from '@modules/Contract/dtos/IContractDTO';
import { IContractRepository } from '@modules/Contract/repositories/IContractRepository';

@injectable()
export class UpdateContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number, data: Partial<IContractDTO>): Promise<void> {
    await this.contractRepository.update(id, data);
  }
}
