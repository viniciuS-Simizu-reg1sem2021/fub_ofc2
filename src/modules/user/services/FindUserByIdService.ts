import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

@injectable()
export class FindUserByIdService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: number): Promise<IUserDTO> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('user not found');
    }

    return user;
  }
}
