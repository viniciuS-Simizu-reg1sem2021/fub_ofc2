import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IDefaultStatusContractDTO } from '@modules/defaults/statuscontract/dtos/IDefaultStatusContractDTO';
import { IDefaultCategoryDTO } from '@modules/defaults/category/dtos/IDefaultCategoryDTO';

export interface IContractDTO extends IBaseDTO {
  employee: IUserDTO;
  employer: IUserDTO;
  interested: IUserDTO[];
  statusContract: IDefaultStatusContractDTO;
  category: IDefaultCategoryDTO;
  title: string;
  description: string;
  isPaid: boolean;
}
