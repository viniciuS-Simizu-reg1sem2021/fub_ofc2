import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { BaseEntity } from '@shared/infra/typeorm/entities/BaseEntity';
import { UserEntity } from '@modules/user/infra/typeorm/entities/UserEntity';
import { DefaultStatusContractEntity } from '@modules/defaults/statuscontract/infra/typeorm/entities/DefaultStatusContractEntity';

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

  @ManyToMany(() => UserEntity)
  @JoinTable({
    name: 'aux_contracts_users',
    joinColumn: {
      name: 'id_contract',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_user',
      referencedColumnName: 'id',
    },
  })
  interested: UserEntity[];

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
