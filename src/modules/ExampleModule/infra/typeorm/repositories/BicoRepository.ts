import BaseRepository from "../../../../../shared/infra/typeorm/repositories/BaseRepository";
import IBicoDTO from "../../../dtos/IBicoDTO";
import BicoEntity from "../entities/BicoEntity";

export default class BicoRepository extends BaseRepository<
  IBicoDTO,
  BicoEntity
> {
  constructor() {
    super();
  }
}
