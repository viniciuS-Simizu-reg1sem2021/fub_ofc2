import { UpdateResult } from 'typeorm'
import { inject, injectable } from 'tsyringe'
import IContractDTO from '../dtos/IContractDTO'
import ContractRepository from '../infra/typeorm/repositories/ContractRepository'

@injectable()
export default class UpdateContractService {
  constructor(
    @inject(ContractRepository) private contractRepository: ContractRepository
  ) {}

  public async execute(id: number, data: IContractDTO): Promise<UpdateResult> {
    return this.contractRepository.update(id, data)
  }
}
