import { inject, injectable } from 'tsyringe'
import NotificationRepository from '../infra/typeorm/repositories/NotificationRepository'
import INotificationDTO from '../dtos/INotificationDTO'
import { UpdateResult } from 'typeorm'

@injectable()
export default class UpdateNotificationService {
  constructor(
    @inject(NotificationRepository)
    private notificationRepository: NotificationRepository
  ) {}

  public async execute(
    id: number,
    data: INotificationDTO
  ): Promise<UpdateResult> {
    return this.notificationRepository.update(id, data)
  }
}
