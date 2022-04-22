import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class RetrieveContractAndFoundUserHelper {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(
    id: number,
    user: { id: number }
  ): Promise<{ contract: IContractDTO; foundUser: IUserDTO }> {
    const contract = await this.contractRepository.findById(id);

    if (!contract) {
      throw new Error('Contract not found');
    }

    if (user.id === contract.employer.id) {
      throw new Error('You cannot apply to your own contract');
    }

    if (contract.employee) {
      throw new Error('Contract already have employee');
    }

    const foundUser = await this.userRepository.findById(user.id);

    if (!foundUser) {
      throw new Error('Your user does not exists');
    }

    return { contract, foundUser };
  }
}
