import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';

import { UserEntity } from '@modules/User/infra/typeorm/entities/UserEntity';
import { IUserRepository } from '@modules/User/repositories/IUserRepository';

@injectable()
export class UserRepository implements IUserRepository {
  private repository: Repository<UserEntity>;

  constructor() {
    this.repository = getRepository(UserEntity);
  }

  async create(data: UserEntity): Promise<void> {
    await this.repository.save(await this.repository.create(data));
  }

  async list(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  async findbyId(id: number): Promise<UserEntity | undefined> {
    return this.repository.findOne(id);
  }

  async update(id: number, data: Partial<UserEntity>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async softDelete(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.repository.findOne({ email });
  }
}
