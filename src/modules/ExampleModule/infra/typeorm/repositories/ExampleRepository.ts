import { injectable } from 'tsyringe'
import IExampleDTO from '../../../dtos/IExampleDTO'
import ExampleEntity from '../entities/ExampleEntity'
import BaseRepository from '../../../../../shared/infra/typeorm/repositories/BaseRepository'

@injectable()
export default class ExampleRepository extends BaseRepository<
  IExampleDTO,
  ExampleEntity
> {
  constructor() {
    super(ExampleEntity)
  }
}
