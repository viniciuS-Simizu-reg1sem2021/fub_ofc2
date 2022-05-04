import { IUserDTO } from '@modules/user/dtos/IUserDTO';

export interface IMailerProvider {
  sendRecoverPasswordEmail(
    user: IUserDTO,
    recoverPasswordLink: string
  ): Promise<void>;
}
