import { UsuarioEntity } from '../infra/typeorm/entities/UsuarioEntity'

export default interface INotificacaoDTO {
  fk_id_destinatario: UsuarioEntity
  fk_id_remetente: UsuarioEntity
}
