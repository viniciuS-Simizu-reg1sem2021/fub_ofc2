import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IDefaultStatusContractDTO } from '@modules/default/statuscontract/dtos/IDefaultStatusContractDTO';

export interface IContractDTO extends IBaseDTO {
  employee: IUserDTO | number;
  employer: IUserDTO | number;
  statusContract: IDefaultStatusContractDTO;
  title: string;
  description: string;
  isPaid: boolean;
}
