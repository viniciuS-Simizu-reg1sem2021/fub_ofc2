import { inject, injectable } from 'tsyringe'
import ContractRepository from '../infra/typeorm/repositories/ContractRepository'

@injectable()
export default class DeleteContractService {
  constructor(
    @inject(ContractRepository) private contractRepository: ContractRepository
  ) {}

  public async execute(id: number): Promise<void> {
    await this.contractRepository.delete(id)
  }
}
