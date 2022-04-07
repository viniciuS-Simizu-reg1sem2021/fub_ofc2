import {
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
  Entity,
} from 'typeorm'
import ICouponDTO from '../../../dtos/ICouponDTO'
import DefaultRatingEntity from '../../../../DefaultRating/infra/typeorm/entities/DefaultRatingEntity'

@Entity('coupons')
export default class CouponEntity implements ICouponDTO {
  @PrimaryGeneratedColumn({ name: 'id_coupon' })
  id?: number

  @ManyToOne(() => DefaultRatingEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_rating' })
  ratingId: DefaultRatingEntity

  @Column({ name: 'value' })
  value: number

  @Column({ name: 'deadline' })
  deadline: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  UpdatedAt: Date
}
