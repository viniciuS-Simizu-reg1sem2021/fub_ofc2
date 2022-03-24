import BaseRepository from "../../../../../shared/infra/typeorm/repositories/BaseRepository";
import IExampleDTO from "../../../dtos/IExampleDTO";
import ExampleEntity from "../entities/ExampleEntity";

export default class ExampleRepository extends BaseRepository<
  IExampleDTO,
  ExampleEntity
> {
  constructor() {
    super();
  }
}
