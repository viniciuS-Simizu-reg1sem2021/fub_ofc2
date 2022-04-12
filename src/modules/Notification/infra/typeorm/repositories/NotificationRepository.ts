import BaseRepository from '../../../../../shared/infra/typeorm/repositories/BaseRepository'
import INotificationDTO from '../../../dtos/INotificationDTO'
import NotificationEntity from '../entities/NotificationEntity'
import { injectable } from 'tsyringe'

@injectable()
export default class NotificationRepository extends BaseRepository<
  INotificationDTO,
  NotificationEntity
> {
  constructor() {
    super(NotificationEntity)
  }
}
