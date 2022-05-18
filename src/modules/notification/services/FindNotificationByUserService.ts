import { inject, injectable } from 'tsyringe';

import { INotificationDTO } from '@modules/notification/dtos/INotificationDTO';
import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';

@injectable()
export class FindNotificationByUserService {
  constructor(
    @inject('NotificationRepository')
    private notificationRepository: INotificationRepository
  ) {}

  public async execute(user: { id: number }): Promise<INotificationDTO[]> {
    return this.notificationRepository.findByUser(user);
  }
}
