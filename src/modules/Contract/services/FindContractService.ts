import { inject, injectable } from 'tsyringe'
import ContractEntity from '../infra/typeorm/entities/ContractEntity'
import ContractRepository from '../infra/typeorm/repositories/ContractRepository'

@injectable()
export default class FindContractService {
  constructor(
    @inject(ContractRepository) private contractRepository: ContractRepository
  ) {}

  public async execute(id: number): Promise<ContractEntity | undefined> {
    return this.contractRepository.find(id)
  }
}
