import { IUserDTO } from '@modules/user/dtos/IUserDTO';

export interface IUserRepository {
  // CQRS - Command Query Responsibility Segregation
  create(data: IUserDTO): Promise<void>;

  list(): Promise<IUserDTO[]>;

  findById(id: number): Promise<IUserDTO | null>;

  update(id: number, data: Partial<IUserDTO>): Promise<void>;

  delete(id: number): Promise<void>;

  softDelete(id: number): Promise<void>;

  findByEmail(email: string): Promise<IUserDTO | null>;
}
