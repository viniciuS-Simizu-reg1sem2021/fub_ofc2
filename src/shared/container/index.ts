import { container } from 'tsyringe';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IEncoderProvider } from '@shared/providers/EncoderProvider/IEncoderProvider';
import { UserRepository } from '@modules/user/infra/typeorm/repositories/UserRepository';
import { ContractRepository } from '@modules/contract/infra/typeorm/repositories/ContractRepository';
import { CouponRepository } from '@modules/default/coupon/infra/typeorm/repositories/CouponRepository';
import { BcryptEncoderProvider } from '@shared/providers/EncoderProvider/implementations/BcryptEncoderProvider';
import { NotificationRepository } from '@modules/notification/infra/typeorm/repositories/NotificationRepository';

// Repositories
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<ContractRepository>(
  'ContractRepository',
  ContractRepository
);

container.registerSingleton<CouponRepository>(
  'CouponRepository',
  CouponRepository
);

container.registerSingleton<NotificationRepository>(
  'NotificationRepository',
  NotificationRepository
);

// Providers
container.registerSingleton<IEncoderProvider>(
  'EncoderProvider',
  BcryptEncoderProvider
);
