import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/User/dtos/IUserDTO';
import { IUserRepository } from '@modules/User/repositories/IUserRepository';

@injectable()
export class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(
    id: number,
    data: Partial<IUserDTO>,
    img?: Express.Multer.File
  ): Promise<void> {
    let imagePath: string | null = null;

    if (img) {
      imagePath = `${img.destination}${img.filename}`;
    }

    return this.userRepository.update(id, {
      ...data,
      imagePath,
    });
  }
}
