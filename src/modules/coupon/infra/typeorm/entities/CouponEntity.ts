import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ICouponDTO } from '@modules/coupon/dtos/ICouponDTO';
import { BaseEntity } from '@shared/infra/typeorm/entities/BaseEntity';
import { ContractEntity } from '@modules/contract/infra/typeorm/entities/ContractEntity';
import { DefaultRatingEntity } from '@modules/defaults/rating/infra/typeorm/entities/DefaultRatingEntity';

@Entity('coupons')
export class CouponEntity extends BaseEntity implements ICouponDTO {
  @PrimaryGeneratedColumn({ name: 'id_coupon' })
  id?: number;

  @ManyToOne(() => DefaultRatingEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_default_rating' })
  ratingId: DefaultRatingEntity;

  @ManyToOne(() => ContractEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_contract' })
  contract: ContractEntity;

  @Column({ name: 'value' })
  value: number;

  @Column({ name: 'deadline' })
  deadline: Date;
}
