import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import IUserDTO from '../../../dtos/IUserDTO'

@Entity('users')
export default class UserEntity implements IUserDTO {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  id?: number

  @Column({ name: 'email' })
  email: string

  @Column({ name: 'username' })
  username: string

  @Column({ name: 'phone' })
  phone: string

  @Column({ name: 'balance' })
  balance: number

  @Column({ name: 'street' })
  street: string

  @Column({ name: 'district' })
  district: string

  @Column({ name: 'state' })
  state: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
