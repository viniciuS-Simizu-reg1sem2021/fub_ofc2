import { verify } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IEncoderProvider } from '@shared/providers/EncoderProvider/IEncoderProvider';

interface IPasswords {
  password: string;
  passwordVerification: string;
}

@injectable()
export class ChangePasswordService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('EncoderProvider')
    private encoderProvider: IEncoderProvider
  ) {}

  public async execute(
    id: number,
    token: string,
    data: IPasswords
  ): Promise<void> {
    const authConfig = auth();
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    if (data.password !== data.passwordVerification) {
      throw new Error('Passwords do not match');
    }

    verify(token, authConfig.JWT_SECRET + user.password);

    const hashedPassword = await this.encoderProvider.encode(data.password);

    await this.userRepository.update(id, { password: hashedPassword });
  }
}
