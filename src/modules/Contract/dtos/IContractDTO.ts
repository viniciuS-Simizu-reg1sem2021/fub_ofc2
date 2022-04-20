import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IUserDTO } from '@modules/User/dtos/IUserDTO';
import { IDefaultStatusContractDTO } from '@modules/DefaultStatusContract/dtos/IDefaultStatusContractDTO';

export interface IContractDTO extends IBaseDTO {
  employee: IUserDTO;
  employer: IUserDTO;
  statusContract: IDefaultStatusContractDTO;
  title: string;
  description: string;
  isPaid: boolean;
}
