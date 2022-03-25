import UsuarioEntity from '../infra/typeorm/entities/UsuarioEntity'
import BicoEntity from '../infra/typeorm/entities/BicoEntity'

export default interface IInteressadoDTO {
  fk_id_bico: BicoEntity
  fk_id_usuario: UsuarioEntity
}
