import { inject, injectable } from 'tsyringe'
import UserEntity from '../infra/typeorm/entities/UserEntity'
import UserRepository from '../infra/typeorm/repositories/UserRepository'

@injectable()
export default class ListUserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async execute(): Promise<UserEntity[]> {
    return this.userRepository.list()
  }
}
