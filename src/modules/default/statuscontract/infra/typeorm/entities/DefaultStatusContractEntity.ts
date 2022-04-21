import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IDefaultStatusContractDTO } from '@modules/default/statuscontract/dtos/IDefaultStatusContractDTO';

@Entity('default_status_contract')
export class DefaultStatusContractEntity implements IDefaultStatusContractDTO {
  @PrimaryGeneratedColumn({ name: 'id_default_status_contract' })
  id?: number;

  @Column({ name: 'status_contract' })
  statusContract: string;
}
