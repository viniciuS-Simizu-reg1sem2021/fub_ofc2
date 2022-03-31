import { inject, injectable } from "tsyringe";
import CouponRepository from "../infra/typeorm/repositories/CouponRepository";
import CouponEntity from "../infra/typeorm/entities/CouponEntity";

@injectable()
export default class ListCouponService {
  constructor(
    @inject(CouponRepository) private couponRepository: CouponRepository
  ) {}

  public async execute(): Promise<CouponEntity[]> {
    return this.couponRepository.list();
  }
}
