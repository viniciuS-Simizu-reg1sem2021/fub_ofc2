import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IDefaultRatingDTO } from '@modules/default/rating/dtos/IDefaultRatingDTO';

export interface ICouponDTO extends IBaseDTO {
  ratingId: IDefaultRatingDTO;
  value: number;
  deadline: Date;
}
