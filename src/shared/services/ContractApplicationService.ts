import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { AppError } from '@shared/errors/AppError';

interface RetrievedInfo {
  contract: IContractDTO;
  userInfo: IUserDTO;
  selectedUser: IUserDTO;
}

@injectable()
export class ContractApplicationService {
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
      throw new AppError('Contract not found');
    }

    const userInfo = await this.userRepository.findById(user.id);

    if (!userInfo) {
      throw new AppError('Your user does not exists');
    }

    if (selectedUserId) {
      const selectedUser = await this.userRepository.findById(selectedUserId);

      if (!selectedUser) {
        throw new AppError('This user does not exists');
      }

      if (
        !contract.interested
          .map((interestedUser) => interestedUser.id)
          .includes(selectedUser.id)
      ) {
        throw new AppError('This user is not interested in your job');
      }

      return { contract, userInfo, selectedUser };
    }

    return { contract, userInfo, selectedUser: {} as IUserDTO };
  }
}
