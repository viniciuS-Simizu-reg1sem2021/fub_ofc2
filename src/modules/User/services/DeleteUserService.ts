import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '@modules/User/repositories/IUserRepository';

@injectable()
export class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: number): Promise<void> {
    await this.userRepository.softDelete(id);
  }
}
