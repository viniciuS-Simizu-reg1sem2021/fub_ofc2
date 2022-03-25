import { Entity, ManyToOne } from "typeorm"
import IInteressadoDTO from "../../../dtos/IInteressadoDTO"
import UsuarioEntity from './UsuarioEntity'
import BicoEntity from './BicoEntity'

@Entity({ name: "tb_interesse" })
export default class InteressadoEntity implements IInteressadoDTO {
    
    @ManyToOne(() => BicoEntity, (fk_id_bico) => fk_id_bico.bicos)
    fk_id_bico: BicoEntity
    
    
    @ManyToOne(() => UsuarioEntity, (fk_id_usuario) => fk_id_usuario.interesses)
    fk_id_usuario: UsuarioEntity

}
