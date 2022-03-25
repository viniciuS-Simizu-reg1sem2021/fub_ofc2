import BaseRepository from "../../../../../shared/infra/typeorm/repositories/BaseRepository";
import IInteressadoDTO from "../../../dtos/IInteressadoDTO";
import InteressadoEntity from "../entities/InteressadoEntity";

export default class InteressadoRepository extends BaseRepository<
  IInteressadoDTO,
  InteressadoEntity
> {
  constructor() {
    super();
  }
}
