import { inject, injectable } from 'tsyringe';

import { IContractDTO } from '@modules/Contract/dtos/IContractDTO';
import { IContractRepository } from '@modules/Contract/repositories/IContractRepository';

@injectable()
export class ListContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(): Promise<IContractDTO[]> {
    return this.contractRepository.list();
  }
}
