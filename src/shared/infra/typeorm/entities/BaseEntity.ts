import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

import { IBaseDTO } from '@shared/dtos/IBaseDTO';

export class BaseEntity implements IBaseDTO {
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}
