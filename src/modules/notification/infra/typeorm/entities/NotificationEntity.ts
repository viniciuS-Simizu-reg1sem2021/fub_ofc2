import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseEntity } from '@shared/infra/typeorm/entities/BaseEntity';
import { UserEntity } from '@modules/user/infra/typeorm/entities/UserEntity';
import { INotificationDTO } from '@modules/notification/dtos/INotificationDTO';
import { ContractEntity } from '@modules/contract/infra/typeorm/entities/ContractEntity';

@Entity('notifications')
export class NotificationEntity extends BaseEntity implements INotificationDTO {
  @PrimaryGeneratedColumn({ name: 'id_notification' })
  id?: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_user' })
  user: UserEntity;

  @ManyToOne(() => ContractEntity)
  @JoinColumn({ referencedColumnName: 'id', name: 'id_contract' })
  contract: ContractEntity;

  @Column({ name: 'content' })
  content: string;
}
