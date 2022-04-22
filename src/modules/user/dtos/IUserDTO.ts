import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IDefaultRatingDTO } from '@modules/defaults/rating/dtos/IDefaultRatingDTO';
import { IDefaultCategoryDTO } from '@modules/defaults/category/dtos/IDefaultCategoryDTO';

export interface IUserDTO extends IBaseDTO {
  email: string;
  password: string;
  realName: string;
  username: string;
  phone: string;
  imagePath: string | null;
  categories: IDefaultCategoryDTO[];
  ratings: IDefaultRatingDTO[];
  street: string;
  district: string;
  state: string;
  city: string;
}
