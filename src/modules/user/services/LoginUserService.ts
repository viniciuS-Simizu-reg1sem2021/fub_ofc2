import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IPayloadDTO } from '@modules/user/dtos/IPayloadDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IEncoderProvider } from '@shared/providers/EncoderProvider/IEncoderProvider';
import { AppError } from '@shared/errors/AppError';

interface ILoginRequest {
  email: string;
  password: string;
}

@injectable()
export class LoginUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('EncoderProvider')
    private encoderProvider: IEncoderProvider
  ) {}

  public async execute({ email, password }: ILoginRequest): Promise<string> {
    const authConfig = auth();
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Credentials incorrect');
    }

    const passwordMatch = await this.encoderProvider.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      throw new AppError('Credentials incorrect');
    }

    const payload: IPayloadDTO = {
      sub: { user: { id: <number>user.id } },
    };

    const token = sign(payload, authConfig.JWT_SECRET, {
      expiresIn: authConfig.JWT_EXPIRATION,
    });

    return token;
  }
}
