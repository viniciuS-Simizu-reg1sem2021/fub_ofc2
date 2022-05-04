import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

type UserContact = Omit<
  IUserDTO,
  | 'password'
  | 'id'
  | 'birthDate'
  | 'description'
  | 'deletedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'city'
  | 'district'
  | 'street'
  | 'state'
> & {
  password?: string;
  id?: number;
  birthDate?: Date;
  description?: string;
  deletedAt?: Date;
  updatedAt?: Date;
  createdAt?: Date;
  city?: string;
  district?: string;
  street?: string;
  state?: string;
};

@injectable()
export class EmployerRetrieveContactService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<UserContact> {
    const contract = await this.contractRepository.findById(id);

    if (!contract) {
      throw new Error('Contract not found');
    }

    if (contract.employer.id !== user.id) {
      throw new Error('This is not your contract');
    }

    if (!contract.employee) {
      throw new Error('This contract does not have a selected employee');
    }

    return {
      ...contract.employee,
      id: undefined,
      city: undefined,
      birthDate: undefined,
      createdAt: undefined,
      updatedAt: undefined,
      street: undefined,
      deletedAt: undefined,
      description: undefined,
      district: undefined,
      state: undefined,
      password: undefined,
    };
  }
}
