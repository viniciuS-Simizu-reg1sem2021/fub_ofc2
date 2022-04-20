import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/User/dtos/IUserDTO';
import { IUserRepository } from '@modules/User/repositories/IUserRepository';

@injectable()
export class FindUserByIdService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: number): Promise<IUserDTO> {
    const user = await this.userRepository.findbyId(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
