import { inject, injectable } from 'tsyringe'
import NotificationRepository from '../infra/typeorm/repositories/NotificationRepository'

@injectable()
export default class DeleteNotificationService {
  constructor(
    @inject(NotificationRepository)
    private notificationRepository: NotificationRepository
  ) {}

  public async execute(id: number): Promise<void> {
    await this.notificationRepository.delete(id)
  }
}
