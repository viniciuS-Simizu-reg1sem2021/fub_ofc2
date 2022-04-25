import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';

import { UserEntity } from '@modules/user/infra/typeorm/entities/UserEntity';
import { ContractEntity } from '@modules/contract/infra/typeorm/entities/ContractEntity';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';

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
    return this.repository.find({ loadRelationIds: true });
  }

  async findById(id: number): Promise<ContractEntity | undefined> {
    return this.repository.findOne(id, { loadRelationIds: true });
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

  async applyToContract(id: number, interested: UserEntity): Promise<void> {
    await this.repository
      .createQueryBuilder('contract')
      .leftJoin('id_contract', 'aux_contracts_users')
      .insert()
      .into('aux_contracts_users')
      .values([{ id_contract: id, id_user: interested.id }])
      .execute();
  }

  async unapplyToContract(id: number, interested: IUserDTO): Promise<void> {
    await this.repository
      .createQueryBuilder('contract')
      .leftJoin('id_contract', 'aux_contracts_users')
      .delete()
      .from('aux_contracts_users')
      .where('aux_contracts_users.id_contract = :id', { id })
      .andWhere('aux_contracts_users.id_user = :interestedId', {
        interestedId: interested.id,
      })
      .execute();
  }

  async selectEmployee(id: number, employee: UserEntity): Promise<void> {
    await this.repository
      .createQueryBuilder('contract')
      .leftJoin('id_contract', 'aux_contracts_users')
      .update()
      .set({ employee, statusContract: { id: 2 } })
      .where('id_contract = :id', { id })
      .execute();
  }

  async generateCoupon(id: number): Promise<void> {
    await this.repository
      .createQueryBuilder('contract')
      .update()
      .set({ statusContract: { id: 3 }, generatedCoupon: true })
      .where('id_contract =:id', { id })
      .execute();
  }

  async confirmPayment(id: number): Promise<void> {
    await this.repository
      .createQueryBuilder('contract')
      .update()
      .set({ statusContract: { id: 4 }, isPaid: true })
      .where('id_contract = :id', { id })
      .execute();
  }
}
