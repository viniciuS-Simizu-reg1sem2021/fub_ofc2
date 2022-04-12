import { UpdateResult } from 'typeorm'
import IUserDTO from '../dtos/IUserDTO'
import { inject, injectable } from 'tsyringe'
import UserRepository from '../infra/typeorm/repositories/UserRepository'

@injectable()
export default class UpdateUserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async execute(
    id: number,
    data: IUserDTO,
    img?: Express.Multer.File
  ): Promise<UpdateResult> {
    if (img) {
      return this.userRepository.update(id, {
        ...data,
        imagePath: `${img.destination}${img.filename}`,
      })
    }

    return this.userRepository.update(id, data)
  }
}
