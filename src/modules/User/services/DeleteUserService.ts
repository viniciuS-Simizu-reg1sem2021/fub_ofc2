import { inject, injectable } from 'tsyringe'
import UserRepository from '../infra/typeorm/repositories/UserRepository'

@injectable()
export default class DeleteUserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async execute(id: number): Promise<void> {
    await this.userRepository.delete(id)
  }
}
