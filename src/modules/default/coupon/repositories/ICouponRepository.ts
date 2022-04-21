import { ICouponDTO } from '@modules/default/coupon/dtos/ICouponDTO';

export interface ICouponRepository {
  create(data: ICouponDTO): Promise<void>;

  list(): Promise<ICouponDTO[]>;

  findById(id: number): Promise<ICouponDTO | undefined>;

  update(id: number, data: Partial<ICouponDTO>): Promise<void>;

  delete(id: number): Promise<void>;

  softDelete(id: number): Promise<void>;
}
