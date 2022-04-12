import { createHash } from 'crypto'
import IUserDTO from '../dtos/IUserDTO'
import { inject, injectable } from 'tsyringe'
import UserEntity from '../infra/typeorm/entities/UserEntity'
import UserRepository from '../infra/typeorm/repositories/UserRepository'

@injectable()
export default class CreateUserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async execute(
    data: IUserDTO,
    img?: Express.Multer.File
  ): Promise<UserEntity> {
    const hashedPassword = createHash('sha256')
      .update(data.password)
      .digest('hex')

    if (img)
      return this.userRepository.create({
        ...data,
        imagePath: `${img.destination}${img.filename}`,
        password: hashedPassword,
      })

    return this.userRepository.create({ ...data, password: hashedPassword })
  }
}
