import { container } from 'tsyringe';
import UserRepository from '@modules/User/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '@modules/User/repositories/IUserRepository';
import { IEncoderProvider } from '@shared/providers/EncoderProvider/IEncoderProvider';
import { BcryptEncoderProvider } from '@shared/providers/EncoderProvider/implementations/BcryptEncoderProvider';

// Repositories
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

// Providers
container.registerSingleton<IEncoderProvider>(
  'EncoderProvider',
  BcryptEncoderProvider
);
