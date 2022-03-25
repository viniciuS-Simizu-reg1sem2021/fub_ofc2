import BaseRepository from "../../../../../shared/infra/typeorm/repositories/BaseRepository";
import IUsuarioDTO from "../../../dtos/IUsuarioDTO";
import UsuarioEntity from "../entities/UsuarioEntity";

export default class UsuarioRepository extends BaseRepository<
  IUsuarioDTO,
  UsuarioEntity
> {
  constructor() {
    super();
  }
}
