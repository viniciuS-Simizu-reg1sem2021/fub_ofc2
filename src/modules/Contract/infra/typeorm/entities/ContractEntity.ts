import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import IUserDTO from '../../../../User/dtos/IUserDTO'
import IContractDTO from '../../../dtos/IContractDTO'
import IDefaultStatusContractDTO from '../../../../DefaultStatusContract/dtos/IDefaultStatusContractDTO'

@Entity('contracts')
export default class ContractEntity implements IContractDTO {
  @PrimaryGeneratedColumn({ name: 'id_contract' })
  id?: number

  @Column({ name: 'employee' })
  employee: Partial<IUserDTO>

  @Column({ name: 'employer' })
  employer: Partial<IUserDTO>

  @Column({ name: 'default_status_contract' })
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
