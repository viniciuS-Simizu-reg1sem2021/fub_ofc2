import { inject, injectable } from "tsyringe";
import CouponRepository from "../infra/typeorm/repositories/CouponRepository";
import CouponEntity from "../infra/typeorm/entities/CouponEntity";

@injectable()
export default class FindCouponService {
  constructor(
    @inject(CouponRepository) private couponRepository: CouponRepository
  ) {}

  public async execute(id: number): Promise<CouponEntity | undefined> {
    return this.couponRepository.find(id);
  }
}
