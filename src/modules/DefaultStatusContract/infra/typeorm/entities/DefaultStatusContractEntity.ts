import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import IDefaultStatusContractDTO from '../../../dtos/IDefaultStatusContractDTO'

@Entity('default_status_contract')
export default class DefaultStatusContractEntity
  implements IDefaultStatusContractDTO
{
  @PrimaryGeneratedColumn({ name: 'id_default_status_contract' })
  id?: number

  @Column({ name: 'status_contract' })
  defaultStatusContract: string
}
