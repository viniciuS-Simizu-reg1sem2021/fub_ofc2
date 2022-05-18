import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

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
      throw new AppError('Your user does not exists');
    }

    await this.contractRepository.create({ ...data, employer: foundUser });
  }
}
