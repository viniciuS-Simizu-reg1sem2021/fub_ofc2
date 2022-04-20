import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { IContractDTO } from '@modules/Contract/dtos/IContractDTO';
import { BaseEntity } from '@shared/infra/typeorm/entities/BaseEntity';
import { UserEntity } from '@modules/User/infra/typeorm/entities/UserEntity';
import { DefaultStatusContractEntity } from '@modules/DefaultStatusContract/infra/typeorm/entities/DefaultStatusContractEntity';

@Entity('contracts')
export class ContractEntity extends BaseEntity implements IContractDTO {
  @PrimaryGeneratedColumn({ name: 'id_contract' })
  id?: number;

  @OneToOne(() => UserEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_employee' })
  employee: UserEntity;

  @OneToOne(() => UserEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_employer' })
  employer: UserEntity;

  @ManyToOne(() => DefaultStatusContractEntity)
  @JoinColumn({
    referencedColumnName: 'id',
    name: 'id_default_status_contract',
  })
  statusContract: DefaultStatusContractEntity;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'is_paid' })
  isPaid: boolean;
}
