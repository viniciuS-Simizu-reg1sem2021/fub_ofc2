import { UsuarioEntity } from '../infra/typeorm/entities/UsuarioEntity'

export default interface IBicoDTO {
  pk_id: string
  fk_id_contratante: UsuarioEntity
  titulo: string
  descricao: string
  publicado_em: Date
  avaliacao: number
  comentario?: string
  fk_id_contratado: UsuarioEntity
}
