import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';

import { ContractEntity } from '@modules/contract/infra/typeorm/entities/ContractEntity';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class ContractRepository implements IContractRepository {
  private repository: Repository<ContractEntity>;

  constructor() {
    this.repository = getRepository(ContractEntity);
  }

  async create(data: ContractEntity): Promise<void> {
    await this.repository.save(await this.repository.create(data));
  }

  async list(): Promise<ContractEntity[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<ContractEntity | undefined> {
    return this.repository.findOne(id);
  }

  async update(id: number, data: Partial<ContractEntity>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async softDelete(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}
