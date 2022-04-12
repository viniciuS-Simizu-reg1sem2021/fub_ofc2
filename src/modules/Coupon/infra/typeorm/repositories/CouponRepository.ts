import { injectable } from 'tsyringe'
import ICouponDTO from '../../../dtos/ICouponDTO'
import CouponEntity from '../entities/CouponEntity'
import BaseRepository from '../../../../../shared/infra/typeorm/repositories/BaseRepository'

@injectable()
export default class CouponRepository extends BaseRepository<
  ICouponDTO,
  CouponEntity
> {
  constructor() {
    super(CouponEntity)
  }
}
