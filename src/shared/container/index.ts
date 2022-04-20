import { container } from 'tsyringe';

import { IUserRepository } from '@modules/User/repositories/IUserRepository';
import { IEncoderProvider } from '@shared/providers/EncoderProvider/IEncoderProvider';
import { UserRepository } from '@modules/User/infra/typeorm/repositories/UserRepository';
import { CouponRepository } from '@modules/Coupon/infra/typeorm/repositories/CouponRepository';
import { ContractRepository } from '@modules/Contract/infra/typeorm/repositories/ContractRepository';
import { BcryptEncoderProvider } from '@shared/providers/EncoderProvider/implementations/BcryptEncoderProvider';

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

// Providers
container.registerSingleton<IEncoderProvider>(
  'EncoderProvider',
  BcryptEncoderProvider
);
