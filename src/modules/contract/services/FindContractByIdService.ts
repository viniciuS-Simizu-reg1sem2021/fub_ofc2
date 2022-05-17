import { inject, injectable } from 'tsyringe';

import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class FindContractByIdService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number): Promise<IContractDTO> {
    const contract = await this.contractRepository.findById(id);

    if (!contract) {
      throw new AppError('Contract not found');
    }

    return contract;
  }
}
