import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import IUserDTO from '../../../../User/dtos/IUserDTO'
import IContractDTO from '../../../dtos/IContractDTO'
import IDefaultStatusContractDTO from '../../../../DefaultStatusContract/dtos/IDefaultStatusContractDTO'
import UserEntity from '@modules/User/infra/typeorm/entities/UserEntity'
import DefaultStatusContractEntity from '@modules/DefaultStatusContract/infra/typeorm/entities/DefaultStatusContractEntity'

@Entity('contracts')
export default class ContractEntity implements IContractDTO {
  @PrimaryGeneratedColumn({ name: 'id_contract' })
  id?: number

  @OneToOne(() => UserEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_employee' })
  employee: Partial<IUserDTO>

  @OneToOne(() => UserEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_employer' })
  employer: Partial<IUserDTO>

  @ManyToOne(() => DefaultStatusContractEntity)
  @JoinColumn({
    referencedColumnName: 'id',
    name: 'id_default_status_contract',
  })
  statusContract: Partial<IDefaultStatusContractDTO>

  @Column({ name: 'title' })
  title: string

  @Column({ name: 'description' })
  description: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
