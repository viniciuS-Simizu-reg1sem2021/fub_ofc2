import BaseRepository from "../../../../../shared/infra/typeorm/repositories/BaseRepository";
import INotificacaoDTO from "../../../dtos/INotificacaoDTO";
import NotificacaoEntity from "../entities/NotificacaoEntity";

export default class NotificacaoRepository extends BaseRepository<
  INotificacaoDTO,
  NotificacaoEntity
> {
  constructor() {
    super();
  }
}
