import IDefaultRatingDTO from '../../../dtos/IDefaultRatingDTO'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('default_rating')
export default class DefaultRatingEntity implements IDefaultRatingDTO {
  @PrimaryGeneratedColumn({ name: 'id_default_rating' })
  id?: number

  @Column({ name: 'rating' })
  rating: string
}
