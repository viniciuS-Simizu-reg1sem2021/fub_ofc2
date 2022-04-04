import { UpdateResult } from 'typeorm'
import IUserDTO from '../dtos/IUserDTO'
import { inject, injectable } from 'tsyringe'
import UserRepository from '../infra/typeorm/repositories/UserRepository'

@injectable()
export default class UpdateUserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async execute(id: number, data: IUserDTO): Promise<UpdateResult> {
    return this.userRepository.update(id, data)
  }
}
