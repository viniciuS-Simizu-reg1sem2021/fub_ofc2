import { INotificationDTO } from '@modules/notification/dtos/INotificationDTO';
import { NotificationEntity } from '@modules/notification/infra/typeorm/entities/NotificationEntity';

export interface INotificationRepository {
  create(data: INotificationDTO): Promise<void>;

  list(): Promise<INotificationDTO[]>;

  findById(id: number): Promise<INotificationDTO | null>;

  update(id: number, data: Partial<INotificationDTO>): Promise<void>;

  delete(id: number): Promise<void>;

  softDelete(id: number): Promise<void>;

  findByUser(user: { id: number }): Promise<INotificationDTO[]>;
}
