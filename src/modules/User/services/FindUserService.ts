import { inject, injectable } from 'tsyringe'
import UserEntity from '../infra/typeorm/entities/UserEntity'
import UserRepository from '../infra/typeorm/repositories/UserRepository'

@injectable()
export default class FindUserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async execute(id: number): Promise<UserEntity | undefined> {
    return this.userRepository.find(id)
  }
}
