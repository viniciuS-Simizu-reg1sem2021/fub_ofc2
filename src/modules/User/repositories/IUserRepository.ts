import { IUserDTO } from '@modules/User/dtos/IUserDTO';

export interface IUserRepository {
  list(): Promise<IUserDTO[]>;

  findbyId(id: number): Promise<IUserDTO | undefined>;

  findByEmail(email: string): Promise<IUserDTO | undefined>;

  update(id: number, data: Partial<IUserDTO>): Promise<void>;

  delete(id: number): Promise<void>;

  softDelete(id: number): Promise<void>;

  // CQRS - Command Query Responsibility Segregation
  create(data: IUserDTO): Promise<void>;
}
