import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import IUserDTO from '../../../../User/dtos/IUserDTO'
import INotificationDTO from '../../../dtos/INotificationDTO'
import IContractDTO from '../../../../Contract/dtos/IContractDTO'
import UserEntity from '../../../../User/infra/typeorm/entities/UserEntity'
import ContractEntity from '../../../../Contract/infra/typeorm/entities/ContractEntity'

@Entity('notifications')
export default class NotificationEntity implements INotificationDTO {
  @PrimaryGeneratedColumn({ name: 'id_notification' })
  id?: number

  @ManyToOne(() => UserEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_employee' })
  employee: Partial<IUserDTO>

  @ManyToOne(() => UserEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_employer' })
  employer: Partial<IUserDTO>

  @ManyToOne(() => ContractEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_contract' })
  contract: Partial<IContractDTO>

  @Column({ name: 'content' })
  content: string
}
