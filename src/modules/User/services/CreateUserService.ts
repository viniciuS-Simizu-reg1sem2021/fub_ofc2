import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/User/dtos/IUserDTO';
import { IUserRepository } from '@modules/User/repositories/IUserRepository';
import { IEncoderProvider } from '@shared/providers/EncoderProvider/IEncoderProvider';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('EncoderProvider')
    private encoderProvider: IEncoderProvider
  ) {}

  public async execute(
    data: IUserDTO,
    img?: Express.Multer.File
  ): Promise<void> {
    const hashedPassword = await this.encoderProvider.encode(data.password);

    let imagePath: string | null = null;

    if (img) {
      imagePath = `${img.destination}${img.filename}`;
    }

    await this.userRepository.create({
      ...data,
      password: hashedPassword,
      imagePath,
    });
  }
}
