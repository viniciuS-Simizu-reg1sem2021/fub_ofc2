import { inject, injectable } from 'tsyringe';

import { IContractRepository } from '@modules/Contract/repositories/IContractRepository';

@injectable()
export class SoftDeleteContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number): Promise<void> {
    await this.contractRepository.softDelete(id);
  }
}
