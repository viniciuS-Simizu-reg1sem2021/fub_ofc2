import IUserDTO from '../../../dtos/IUserDTO'
import UserEntity from '../entities/UserEntity'
import BaseRepository from '../../../../../shared/infra/typeorm/repositories/BaseRepository'
import { injectable } from 'tsyringe'

@injectable()
export default class UserRepository extends BaseRepository<
  IUserDTO,
  UserEntity
> {
  constructor() {
    super()
  }
}
