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
import IContractDTO from '../../../dtos/IContractDTO'
import UserEntity from '@modules/User/infra/typeorm/entities/UserEntity'
import DefaultStatusContractEntity from '@modules/DefaultStatusContract/infra/typeorm/entities/DefaultStatusContractEntity'

@Entity('contracts')
export default class ContractEntity implements IContractDTO {
  @PrimaryGeneratedColumn({ name: 'id_contract' })
  id?: number

  @OneToOne(() => UserEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_employee' })
  employee: UserEntity

  @OneToOne(() => UserEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_employer' })
  employer: UserEntity

  @ManyToOne(() => DefaultStatusContractEntity)
  @JoinColumn({
    referencedColumnName: 'id',
    name: 'id_default_status_contract',
  })
  statusContract: DefaultStatusContractEntity

  @Column({ name: 'title' })
  title: string

  @Column({ name: 'description' })
  description: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
