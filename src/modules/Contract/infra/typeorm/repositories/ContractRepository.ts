import { injectable } from 'tsyringe'
import IContractDTO from '../../../dtos/IContractDTO'
import ContractEntity from '../entities/ContractEntity'
import BaseRepository from '../../../../../shared/infra/typeorm/repositories/BaseRepository'

@injectable()
export default class ContractRepository extends BaseRepository<
  IContractDTO,
  ContractEntity
> {
  constructor() {
    super()
  }
}
