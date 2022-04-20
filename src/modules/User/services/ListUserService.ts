import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/User/dtos/IUserDTO';
import { IUserRepository } from '@modules/User/repositories/IUserRepository';

@injectable()
export class ListUserService {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository
  ) {}

  public async execute(): Promise<IUserDTO[]> {
    return this.userRepository.list();
  }
}
