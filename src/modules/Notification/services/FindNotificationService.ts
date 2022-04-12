import { inject, injectable } from 'tsyringe'
import NotificationRepository from '../infra/typeorm/repositories/NotificationRepository'
import NotificationEntity from '../infra/typeorm/entities/NotificationEntity'

@injectable()
export default class FindNotificationService {
  constructor(
    @inject(NotificationRepository)
    private notificationRepository: NotificationRepository
  ) {}

  public async execute(id: number): Promise<NotificationEntity | undefined> {
    return this.notificationRepository.find(id)
  }
}
