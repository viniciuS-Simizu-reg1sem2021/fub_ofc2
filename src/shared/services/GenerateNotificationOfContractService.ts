import { inject, injectable } from 'tsyringe';

import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class GenerateNotificationOfContractService {
  constructor(
    @inject('NotificationRepository')
    private notificationRepository: INotificationRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(
    contract: IContractDTO,
    content: string,
    user: { id: number }
  ): Promise<void> {
    const foundUser = await this.userRepository.findById(user.id);

    if (!foundUser) {
      throw new AppError('Your user does not exists');
    }

    await this.notificationRepository.create({
      contract,
      user: foundUser,
      content,
    });
  }
}
