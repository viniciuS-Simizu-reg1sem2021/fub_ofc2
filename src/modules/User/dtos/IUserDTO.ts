import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IDefaultRatingDTO } from '@modules/DefaultRating/dtos/IDefaultRatingDTO';
import { IDefaultCategoryDTO } from '@modules/DefaultCategory/dtos/IDefaultCategoryDTO';

export interface IUserDTO extends IBaseDTO {
  email: string;
  password: string;
  username: string;
  phone: string;
  imagePath: string | null;
  categories: IDefaultCategoryDTO[];
  ratings: IDefaultRatingDTO[];
  street: string;
  district: string;
  state: string;
}
