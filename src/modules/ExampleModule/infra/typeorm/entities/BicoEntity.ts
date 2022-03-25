import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import IBicoDTO from "../../../dtos/IBicoDTO";
import InteressadoEntity from './InteressadoEntity'
import UsuarioEntity from './UsuarioEntity'


@Entity({ name: "tb_bico" })
export default class BicoEntity implements IBicoDTO {

    @PrimaryGeneratedColumn('uuid')
    pk_id: string;


    @ManyToOne(() => UsuarioEntity, (fk_id_contratante) => fk_id_contratante.servicos_ofertados)
    fk_id_contratante: UsuarioEntity;


    @Column({
        type: 'varchar',
        name: 'titulo',
        length: 60

    })
    titulo: string;


    @Column({
        type: 'text',
        name: 'descricao'
    })
    descricao: string;


    @Column({
        name: 'publicado_em',
        type: 'timestamp',
        default: () => "CURRENT_TIMESTAMP" 
    })
    publicado_em: Date;


    @Column({
        type: 'decimal',
        name: 'avaliacao',
        precision: 3,
        scale: 1,
        nullable: true
    })
    avaliacao: number;


    @Column({
        type: 'text',
        name: 'comentario',
        nullable: true
    })
    comentario?: string;



    @ManyToOne(() => UsuarioEntity, (fk_id_contratado) => fk_id_contratado.servicos_prestados)
    fk_id_contratado: UsuarioEntity;

    
    @OneToMany(() => InteressadoEntity, (bicos) => bicos.fk_id_usuario)
    bicos: InteressadoEntity[]

}
