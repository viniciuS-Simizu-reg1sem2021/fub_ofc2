import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IDefaultRatingDTO } from '@modules/default/rating/dtos/IDefaultRatingDTO';
import { IDefaultCategoryDTO } from '@modules/category/dtos/IDefaultCategoryDTO';

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
