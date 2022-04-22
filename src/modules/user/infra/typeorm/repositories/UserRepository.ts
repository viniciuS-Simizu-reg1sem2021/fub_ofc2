import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';

import { UserEntity } from '@modules/user/infra/typeorm/entities/UserEntity';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

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
    return this.repository.find({ loadRelationIds: true });
  }

  async findById(id: number): Promise<UserEntity | undefined> {
    return this.repository.findOne(id, { loadRelationIds: true });
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
