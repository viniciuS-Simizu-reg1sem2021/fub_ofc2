import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable,
  DeleteDateColumn,
} from 'typeorm'
import IUserDTO from '../../../dtos/IUserDTO'
import DefaultCategoryEntity from '../../../../DefaultCategory/infra/typeorm/entities/DefaultCategoryEntity'
import DefaultRatingEntity from '../../../../DefaultRating/infra/typeorm/entities/DefaultRatingEntity'

@Entity('users')
export default class UserEntity implements IUserDTO {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  id?: number

  @Column({ name: 'email' })
  email: string

  @Column({ name: 'password' })
  password: string

  @Column({ name: 'username' })
  username: string

  @Column({ name: 'phone' })
  phone: string

  @Column({ name: 'balance' })
  balance: number

  @Column({ name: 'image_path' })
  imagePath: string

  @ManyToMany(() => DefaultCategoryEntity)
  @JoinTable({
    name: 'aux_users_default_categories',
    joinColumn: {
      name: 'id_user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_default_category',
      referencedColumnName: 'id',
    },
  })
  categories: DefaultCategoryEntity[]

  @ManyToMany(() => DefaultRatingEntity)
  @JoinTable({
    name: 'aux_users_default_rating',
    joinColumn: {
      name: 'id_user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_default_rating',
      referencedColumnName: 'id',
    },
  })
  ratings: DefaultRatingEntity[]

  @Column({ name: 'street' })
  street: string

  @Column({ name: 'district' })
  district: string

  @Column({ name: 'state' })
  state: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date
}
