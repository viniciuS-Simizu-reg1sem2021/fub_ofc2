import { injectable } from 'tsyringe';
import { createTransport } from 'nodemailer';

import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IMailerProvider } from '@shared/providers/MailerProvider/IMailerProvider';

@injectable()
export class NodeMailerProvider implements IMailerProvider {
  public async sendRecoverPasswordEmail(
    user: IUserDTO,
    recoverPasswordLink: string
  ): Promise<void> {
    const transport = await createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'suporte.fazendo.um.bico@gmail.com',
        pass: 'administrador123',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transport.sendMail({
      from: 'Suporte Fazendo Um Bico <suporte.fazendo.um.bico@gmail.com>',
      to: user.email,
      subject: 'Reset Password',
      text: recoverPasswordLink,
      html: `
                <body>
                    <main style='margin: 1rem; border-color: black; padding: 1rem'>
                        <h3>
                            <a href='${recoverPasswordLink}' style="color: green; text-decoration: none; font-size: 1.7rem; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Clique aqui para redefinir sua senha</a>
                        </h3>
                    </main>
                </body>
            `,
    });
  }
}
