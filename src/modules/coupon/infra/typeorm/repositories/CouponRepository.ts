import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';

import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { CouponEntity } from '@modules/coupon/infra/typeorm/entities/CouponEntity';

@injectable()
export class CouponRepository implements ICouponRepository {
  private repository: Repository<CouponEntity>;

  constructor() {
    this.repository = getRepository(CouponEntity);
  }

  async create(data: CouponEntity): Promise<void> {
    await this.repository.save(await this.repository.create(data));
  }

  async list(): Promise<CouponEntity[]> {
    return this.repository.find({ loadRelationIds: true });
  }

  async findById(id: number): Promise<CouponEntity | undefined> {
    return this.repository.findOne(id, { loadRelationIds: true });
  }

  async update(id: number, data: Partial<CouponEntity>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async softDelete(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }

  async employeeConfirmJobDone(id: number): Promise<void> {
    await this.repository
      .createQueryBuilder('coupon')
      .update()
      .set({ isFinished: true })
      .where('id_coupon = :id', { id })
      .execute();
  }

  async employeeDisproveJobDone(id: number): Promise<void> {
    await this.repository
      .createQueryBuilder('coupon')
      .update()
      .set({ isFinished: false })
      .where('id_coupon = :id', { id })
      .execute();
  }

  async employeeConfirmPayment(id: number): Promise<void> {
    await this.repository
      .createQueryBuilder('coupon')
      .update()
      .set({ isPaid: true })
      .where('id_coupon = :id', { id })
      .execute();
  }

  async employerFinishJob(id: number, contractId: number): Promise<void> {
    await this.repository
      .createQueryBuilder('coupon')
      .softDelete()
      .where('id_coupon = :id', { id })
      .execute();

    await this.repository
      .createQueryBuilder('coupon')
      .leftJoin('id_contract', 'contracts')
      .update('ContractEntity')
      .set({ statusContract: { id: 4 } })
      .andWhere('id_contract = :contractId', { contractId })
      .execute();
  }

  async employerRemoveEmployee(id: number, idContract: number): Promise<void> {
    await this.repository
      .createQueryBuilder('coupon')
      .softDelete()
      .where('id_coupon = :id', { id })
      .execute();

    await this.repository
      .createQueryBuilder('coupon')
      .select('id_contract', 'coupon.id_contract')
      .leftJoin('id_contract', 'contracts')
      .update('contracts')
      .set({
        employee: null,
        statusContract: { id: 1 },
        generatedCoupon: false,
      })
      .where('id_contract = :idContract', { idContract })
      .execute();
  }

  employeeRateEmployer(id: number): Promise<void> {
    // TODO
    return Promise.resolve(undefined);
  }

  employerRateEmployee(id: number): Promise<void> {
    // TODO
    return Promise.resolve(undefined);
  }
}
