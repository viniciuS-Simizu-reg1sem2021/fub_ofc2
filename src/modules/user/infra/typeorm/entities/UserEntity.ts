import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { BaseEntity } from '@shared/infra/typeorm/entities/BaseEntity';
import { DefaultRatingEntity } from '@modules/defaults/rating/infra/typeorm/entities/DefaultRatingEntity';

@Entity('users')
export class UserEntity extends BaseEntity implements IUserDTO {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  id?: number;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'real_name' })
  realName: string;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'ocupation' })
  ocupation: string;

  @Column({ name: 'birth_date' })
  birthDate: Date;

  @Column({ name: 'image_path' })
  imagePath: string;

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
  ratings: DefaultRatingEntity[];

  @Column({ name: 'street' })
  street: string;

  @Column({ name: 'district' })
  district: string;

  @Column({ name: 'state' })
  state: string;

  @Column({ name: 'city' })
  city: string;
}
