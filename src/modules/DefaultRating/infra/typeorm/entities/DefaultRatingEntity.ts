import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IDefaultRatingDTO } from '@modules/DefaultRating/dtos/IDefaultRatingDTO';

@Entity('default_rating')
export class DefaultRatingEntity implements IDefaultRatingDTO {
  @PrimaryGeneratedColumn({ name: 'id_default_rating' })
  id?: number;

  @Column({ name: 'rating' })
  rating: string;
}
