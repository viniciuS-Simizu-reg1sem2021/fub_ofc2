import { inject, injectable } from 'tsyringe';

import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';

@injectable()
export class SoftDeleteNotificationService {
  constructor(
    @inject('NotificationRepository')
    private notificationRepository: INotificationRepository
  ) {}

  public async execute(id: number): Promise<void> {
    await this.notificationRepository.softDelete(id);
  }
}
