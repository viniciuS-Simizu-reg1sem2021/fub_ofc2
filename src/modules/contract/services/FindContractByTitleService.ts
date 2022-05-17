import { inject, injectable } from 'tsyringe';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { AppError } from '@shared/errors/AppError';

@injectable()
export default class FindContractByTitleService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(
    title: string,
    user: { id: number }
  ): Promise<IContractDTO[]> {
    if (!user) {
      throw new AppError('Your user does not exist');
    }

    return this.contractRepository.findByTitle(title);
  }
}
