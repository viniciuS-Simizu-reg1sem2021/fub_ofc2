import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import api from '@config/api';
import auth from '@config/auth';
import { IPayloadDTO } from '@modules/user/dtos/IPayloadDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IMailerProvider } from '@shared/providers/MailerProvider/IMailerProvider';

@injectable()
export class RecoverPasswordService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('MailerProvider')
    private encoderProvider: IMailerProvider
  ) {}

  public async execute(email: string): Promise<void> {
    const authConfig = auth();
    const apiConfig = api();
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    const payload: IPayloadDTO = {
      sub: { user: { id: <number>user.id } },
    };

    const token = sign(payload, authConfig.JWT_SECRET + user.password, {
      expiresIn: authConfig.JWT_EXPIRATION,
    });

    const changePasswordLink = `http://localhost:${apiConfig.API_PORT}${apiConfig.API_BASE_URL}/user/change-password/${user.id}/${token}`;

    await this.encoderProvider.sendRecoverPasswordEmail(
      user,
      changePasswordLink
    );
  }
}
