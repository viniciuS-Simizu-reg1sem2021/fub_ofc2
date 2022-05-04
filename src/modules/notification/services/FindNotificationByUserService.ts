import { container, inject, injectable } from 'tsyringe';

import { INotificationDTO } from '@modules/notification/dtos/INotificationDTO';
import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';
import { MergeTwoObjectsArraysHelper } from '@shared/helpers/MergeTwoObjectsArraysHelper';

@injectable()
export class FindNotificationByUserService {
  constructor(
    @inject('NotificationRepository')
    private notificationRepository: INotificationRepository
  ) {}

  public async execute(user: { id: number }): Promise<INotificationDTO[]> {
    const helper = container.resolve(MergeTwoObjectsArraysHelper);

    const { employeeNotifications, employerNotifications } =
      await this.notificationRepository.findByUser(user);

    return helper.execute(
      employeeNotifications,
      employerNotifications,
      (notification: INotificationDTO) => notification.id
    );
  }
}
