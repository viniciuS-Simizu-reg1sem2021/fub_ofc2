import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IDefaultRatingDTO } from '@modules/DefaultRating/dtos/IDefaultRatingDTO';

export interface ICouponDTO extends IBaseDTO {
  ratingId: IDefaultRatingDTO;
  value: number;
  deadline: Date;
}
