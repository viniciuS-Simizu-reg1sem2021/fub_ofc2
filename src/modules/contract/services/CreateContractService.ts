import { inject, injectable } from 'tsyringe';

import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

@injectable()
export class CreateContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(
    data: IContractDTO,
    user: { id: number }
  ): Promise<void> {
    const foundUser = await this.userRepository.findById(user.id);

    if (!foundUser) {
      throw new Error('You user does not exists');
    }

    await this.contractRepository.create({ ...data, employer: foundUser });
  }
}
