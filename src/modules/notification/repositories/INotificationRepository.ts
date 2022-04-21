import { INotificationDTO } from '@modules/notification/dtos/INotificationDTO';

export interface INotificationRepository {
  create(data: INotificationDTO): Promise<void>;

  list(): Promise<INotificationDTO[]>;

  findById(id: number): Promise<INotificationDTO | undefined>;

  update(id: number, data: Partial<INotificationDTO>): Promise<void>;

  delete(id: number): Promise<void>;

  softDelete(id: number): Promise<void>;
}
