import { inject, injectable } from 'tsyringe';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { IContractDTO } from '@modules/contract/dtos/IContractDTO';

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
      throw new Error('Your user does not exist');
    }

    return this.contractRepository.findByTitle(title);
  }
}
