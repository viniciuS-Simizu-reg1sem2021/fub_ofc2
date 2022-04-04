import IUserDTO from '../dtos/IUserDTO'
import { inject, injectable } from 'tsyringe'
import UserEntity from '../infra/typeorm/entities/UserEntity'
import UserRepository from '../infra/typeorm/repositories/UserRepository'

@injectable()
export default class CreateUserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async execute(data: IUserDTO): Promise<UserEntity> {
    return this.userRepository.create(data)
  }
}
