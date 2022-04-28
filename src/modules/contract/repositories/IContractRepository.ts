import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IContractDTO } from '@modules/contract/dtos/IContractDTO';

export interface IContractRepository {
  create(data: IContractDTO): Promise<void>;

  list(): Promise<IContractDTO[]>;

  findById(id: number): Promise<IContractDTO | null>;

  update(id: number, data: Partial<IContractDTO>): Promise<void>;

  delete(id: number): Promise<void>;

  softDelete(id: number): Promise<void>;

  applyToContract(id: number, interested: IUserDTO): Promise<void>;

  unapplyToContract(id: number, interested: IUserDTO): Promise<void>;

  selectEmployee(id: number, employee: IUserDTO): Promise<void>;

  generateCoupon(id: number): Promise<void>;
}
