import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

type BasicUsersReturn = Omit<
  IUserDTO,
  'password' | 'email' | 'street' | 'phone'
> & {
  password?: string;
  email?: string;
  street?: string;
  phone?: string;
};

@injectable()
export class ListUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(): Promise<BasicUsersReturn[]> {
    return (await this.userRepository.list()).map((user) => ({
      ...user,
      password: undefined,
      phone: undefined,
      email: undefined,
      street: undefined,
    }));
  }
}
