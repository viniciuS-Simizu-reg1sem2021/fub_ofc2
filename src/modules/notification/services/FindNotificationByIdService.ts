import { inject, injectable } from 'tsyringe';

import { INotificationDTO } from '@modules/notification/dtos/INotificationDTO';
import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';

@injectable()
export class FindNotificationByIdService {
  constructor(
    @inject('NotificationRepository')
    private notificationRepository: INotificationRepository
  ) {}

  public async execute(id: number): Promise<INotificationDTO> {
    const notification = await this.notificationRepository.findById(id);

    if (!notification) {
      throw new Error('Notification not found');
    }

    return notification;
  }
}
