import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IDefaultStatusContractDTO } from '@modules/defaults/statuscontract/dtos/IDefaultStatusContractDTO';

export interface IContractDTO extends IBaseDTO {
  employee: IUserDTO;
  employer: IUserDTO;
  interested: IUserDTO[];
  statusContract: IDefaultStatusContractDTO;
  title: string;
  description: string;
  generatedCoupon: boolean;
}
