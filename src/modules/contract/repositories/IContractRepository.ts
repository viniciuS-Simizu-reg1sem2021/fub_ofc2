import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';

export interface IContractRepository {
  create(data: IContractDTO): Promise<void>;

  list(): Promise<IContractDTO[]>;

  findById(id: number): Promise<IContractDTO | undefined>;

  update(id: number, data: Partial<IContractDTO>): Promise<void>;

  delete(id: number): Promise<void>;

  softDelete(id: number): Promise<void>;

  applyToContract(id: number, interested: IUserDTO): Promise<void>;
}
