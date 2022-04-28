import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IDefaultRatingDTO } from '@modules/defaults/rating/dtos/IDefaultRatingDTO';

export interface IUserDTO extends IBaseDTO {
  email: string;
  password: string;
  name: string;
  phone: string;
  description: string | null;
  occupation: string;
  birthDate: Date;
  imagePath: string | null;
  ratings: IDefaultRatingDTO[];
  street: string;
  district: string;
  state: string;
  city: string;
}
