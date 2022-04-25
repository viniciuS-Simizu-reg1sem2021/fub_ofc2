import { inject, injectable } from 'tsyringe';

import { INotificationDTO } from '@modules/notification/dtos/INotificationDTO';
import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';

@injectable()
export class ListNotificationService {
  constructor(
    @inject('NotificationRepository')
    private notificationRepository: INotificationRepository
  ) {}

  public async execute(): Promise<INotificationDTO[]> {
    return this.notificationRepository.list();
  }
}
