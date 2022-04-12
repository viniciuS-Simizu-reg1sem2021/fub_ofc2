import { inject, injectable } from 'tsyringe'
import ContractEntity from '../infra/typeorm/entities/ContractEntity'
import ContractRepository from '../infra/typeorm/repositories/ContractRepository'

@injectable()
export default class ListContractService {
  constructor(
    @inject(ContractRepository) private contractRepository: ContractRepository
  ) {}

  public async execute(): Promise<ContractEntity[]> {
    return this.contractRepository.list()
  }
}
