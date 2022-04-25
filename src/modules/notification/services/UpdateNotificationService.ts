import { inject, injectable } from 'tsyringe';

import { INotificationDTO } from '@modules/notification/dtos/INotificationDTO';
import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';

@injectable()
export class UpdateNotificationService {
  constructor(
    @inject('NotificationRepository')
    private notificationRepository: INotificationRepository
  ) {}

  public async execute(
    id: number,
    data: Partial<INotificationDTO>
  ): Promise<void> {
    await this.notificationRepository.update(id, data);
  }
}
