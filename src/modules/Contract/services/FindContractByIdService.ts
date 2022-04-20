import { inject, injectable } from 'tsyringe';

import { IContractDTO } from '@modules/Contract/dtos/IContractDTO';
import { IContractRepository } from '@modules/Contract/repositories/IContractRepository';

@injectable()
export class FindContractByIdService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number): Promise<IContractDTO> {
    const contract = await this.contractRepository.findById(id);

    if (!contract) {
      throw new Error('Contract does not exist');
    }

    return contract;
  }
}
