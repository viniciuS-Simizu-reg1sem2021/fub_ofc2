import { Repository } from 'typeorm';
import { injectable } from 'tsyringe';

import dataSource from '@shared/infra/typeorm';
import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';
import { NotificationEntity } from '@modules/notification/infra/typeorm/entities/NotificationEntity';

@injectable()
export class NotificationRepository implements INotificationRepository {
  private repository: Repository<NotificationEntity>;

  constructor() {
    this.repository = dataSource.getRepository(NotificationEntity);
  }

  async create(data: NotificationEntity): Promise<void> {
    await this.repository.save(await this.repository.create(data));
  }

  async list(): Promise<NotificationEntity[]> {
    return this.repository.find({ loadRelationIds: true });
  }

  async findById(id: number): Promise<NotificationEntity | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['employee', 'employer', 'contract'],
    });
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

  async findByUser(user: { id: number }): Promise<NotificationEntity[]> {
    return await this.repository.find({
      where: { user: { id: user.id } },
    });
  }
}
