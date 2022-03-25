import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import INotificacaoDTO from "../../../dtos/INotificacaoDTO"
import { UsuarioEntity } from './UsuarioEntity'


@Entity({ name: "tb_notificacao" })
export default class NotificacaoEntity implements INotificacaoDTO {

    @ManyToOne(() => UsuarioEntity, (fk_id_destinatario) => fk_id_destinatario.notificacoes_recebidas)
    fk_id_destinatario: UsuarioEntity
    
    
    @ManyToOne(() => UsuarioEntity, (fk_id_remetente) => fk_id_remetente.notificacoes_enviadas)
    fk_id_remetente: UsuarioEntity

}
