import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

type BasicUserReturn = Omit<
  IUserDTO,
  'password' | 'email' | 'street' | 'phone'
> & {
  password?: string;
  email?: string;
  street?: string;
  phone?: string;
};

@injectable()
export class FindUserByIdService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: number): Promise<BasicUserReturn> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('user not found');
    }

    return {
      ...user,
      password: undefined,
      phone: undefined,
      email: undefined,
      street: undefined,
    };
  }
}
