import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import IDefaultCategoryDTO from '../../../dtos/IDefaultCategoryDTO'

@Entity('default_categories')
export default class DefaultCategoryEntity implements IDefaultCategoryDTO {
  @PrimaryGeneratedColumn({ name: 'id_default_category' })
  id?: number

  @Column({ name: 'category' })
  category: string
}
