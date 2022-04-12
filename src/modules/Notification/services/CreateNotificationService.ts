import { inject, injectable } from 'tsyringe'
import NotificationRepository from '../infra/typeorm/repositories/NotificationRepository'
import INotificationDTO from '../dtos/INotificationDTO'
import NotificationEntity from '../infra/typeorm/entities/NotificationEntity'

@injectable()
export default class CreateNotificationService {
  constructor(
    @inject(NotificationRepository)
    private notificationRepository: NotificationRepository
  ) {}

  public async execute(data: INotificationDTO): Promise<NotificationEntity> {
    return this.notificationRepository.create(data)
  }
}
