import { inject, injectable } from 'tsyringe'
import IContractDTO from '../dtos/IContractDTO'
import ContractEntity from '../infra/typeorm/entities/ContractEntity'
import ContractRepository from '../infra/typeorm/repositories/ContractRepository'

@injectable()
export default class CreateContractService {
  constructor(
    @inject(ContractRepository) private contractRepository: ContractRepository
  ) {}

  public async execute(data: IContractDTO): Promise<ContractEntity> {
    return this.contractRepository.create(data)
  }
}
