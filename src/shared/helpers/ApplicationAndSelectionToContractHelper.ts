import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

interface RetrievedInfo {
  contract: IContractDTO;
  foundUser: IUserDTO;
  selectedUser: IUserDTO;
}

@injectable()
export class ApplicationAndSelectionToContractHelper {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(
    id: number,
    user: { id: number },
    selectedUserId?: number
  ): Promise<RetrievedInfo> {
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

    if (selectedUserId) {
      const selectedUser = await this.userRepository.findById(selectedUserId);

      if (!selectedUser) {
        throw new Error('This user does not exists');
      }

      // @ts-ignore
      if (!contract.interested.includes(selectedUser.id)) {
        throw new Error('This user is not interested in your job');
      }

      return { contract, foundUser, selectedUser };
    }

    return { contract, foundUser, selectedUser: {} as IUserDTO };
  }
}
