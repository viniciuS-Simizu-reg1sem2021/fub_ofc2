import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IContractDTO } from '@modules/contract/dtos/IContractDTO';

export interface INotificationDTO extends IBaseDTO {
  employee: IUserDTO;
  employer: IUserDTO;
  contract: IContractDTO;
  content: string;
}
