import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IDefaultCategoryDTO } from '@modules/defaults/category/dtos/IDefaultCategoryDTO';
import { IDefaultStatusContractDTO } from '@modules/defaults/statuscontract/dtos/IDefaultStatusContractDTO';

export interface IContractDTO extends IBaseDTO {
  employee: IUserDTO;
  employer: IUserDTO;
  interested: IUserDTO[];
  statusContract: IDefaultStatusContractDTO;
  category: IDefaultCategoryDTO;
  title: string;
  description: string;
  isPaid: boolean;
  generatedCoupon: boolean;
}
