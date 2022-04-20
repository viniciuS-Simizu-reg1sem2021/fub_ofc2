import IDefaultCategoryDTO from '@modules/DefaultCategory/dtos/IDefaultCategoryDTO';
import IDefaultRatingDTO from '@modules/DefaultRating/dtos/IDefaultRatingDTO';
import { IBaseDTO } from '@shared/dtos/IBaseDTO';

export interface IUserDTO extends IBaseDTO {
  email: string;
  password: string;
  username: string;
  phone: string;
  balance: number;
  imagePath?: string | null;
  categories: IDefaultCategoryDTO[];
  ratings: IDefaultRatingDTO[];
  street: string;
  district: string;
  state: string;
}
