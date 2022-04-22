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
}
