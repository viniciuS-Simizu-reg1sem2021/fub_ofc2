import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';

import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';
import { NotificationEntity } from '@modules/notification/infra/typeorm/entities/NotificationEntity';

@injectable()
export class NotificationRepository implements INotificationRepository {
  private repository: Repository<NotificationEntity>;

  constructor() {
    this.repository = getRepository(NotificationEntity);
  }

  async create(data: NotificationEntity): Promise<void> {
    await this.repository.save(await this.repository.create(data));
  }

  async list(): Promise<NotificationEntity[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<NotificationEntity | undefined> {
    return this.repository.findOne(id);
  }

  async update(id: number, data: Partial<NotificationEntity>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async softDelete(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}
