import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { IDefaultRatingDTO } from '@modules/defaults/rating/dtos/IDefaultRatingDTO';

export interface ICouponDTO extends IBaseDTO {
  employeeRating: IDefaultRatingDTO;
  employerRating: IDefaultRatingDTO;
  contract: IContractDTO;
  value: number;
  deadline: Date;
  isOutDeadline: boolean;
  isFinished: boolean;
  isPaid: boolean;
}
