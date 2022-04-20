import { IBaseDTO } from '@shared/dtos/IBaseDTO';
import { IUserDTO } from '@modules/User/dtos/IUserDTO';
import { IContractDTO } from '@modules/Contract/dtos/IContractDTO';

export interface INotificationDTO extends IBaseDTO {
  employee: IUserDTO;
  employer: IUserDTO;
  contract: IContractDTO;
  content: string;
}
