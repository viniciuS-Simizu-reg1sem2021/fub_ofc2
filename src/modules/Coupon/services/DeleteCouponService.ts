import { inject, injectable } from "tsyringe";
import CouponRepository from "../infra/typeorm/repositories/CouponRepository";

@injectable()
export default class DeleteCouponService {
  constructor(
    @inject(CouponRepository) private couponRepository: CouponRepository
  ) {}

  public async execute(id: number): Promise<void> {
    await this.couponRepository.delete(id);
  }
}
