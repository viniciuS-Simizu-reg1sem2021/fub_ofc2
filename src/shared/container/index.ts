import { container } from 'tsyringe';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IMailerProvider } from '@shared/providers/MailerProvider/IMailerProvider';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { IEncoderProvider } from '@shared/providers/EncoderProvider/IEncoderProvider';
import { UserRepository } from '@modules/user/infra/typeorm/repositories/UserRepository';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { CouponRepository } from '@modules/coupon/infra/typeorm/repositories/CouponRepository';
import { ContractRepository } from '@modules/contract/infra/typeorm/repositories/ContractRepository';
import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';
import { NodeMailerProvider } from '@shared/providers/MailerProvider/implementations/NodeMailerProvider';
import { BcryptEncoderProvider } from '@shared/providers/EncoderProvider/implementations/BcryptEncoderProvider';
import { NotificationRepository } from '@modules/notification/infra/typeorm/repositories/NotificationRepository';

// Repositories
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IContractRepository>(
  'ContractRepository',
  ContractRepository
);

container.registerSingleton<ICouponRepository>(
  'CouponRepository',
  CouponRepository
);

container.registerSingleton<INotificationRepository>(
  'NotificationRepository',
  NotificationRepository
);

// Providers
container.registerSingleton<IEncoderProvider>(
  'EncoderProvider',
  BcryptEncoderProvider
);

container.registerSingleton<IMailerProvider>(
  'MailerProvider',
  NodeMailerProvider
);
