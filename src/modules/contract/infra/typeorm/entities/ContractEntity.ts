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
import { DefaultCategoryEntity } from '@modules/defaults/category/infra/typeorm/entities/DefaultCategoryEntity';

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

  @ManyToOne(() => DefaultCategoryEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_default_category' })
  category: DefaultCategoryEntity;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'is_paid' })
  isPaid: boolean;

  @Column({ name: 'generated_coupon' })
  generatedCoupon: boolean;
}
