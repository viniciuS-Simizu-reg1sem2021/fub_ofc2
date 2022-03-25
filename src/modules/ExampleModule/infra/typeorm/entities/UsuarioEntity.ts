import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import IUsuarioDTO from "../../../dtos/IUsuarioDTO";
import InteressadoEntity from './InteressadoEntity'
import BicoEntity from './BicoEntity'
import NotificacaoEntity from './NotificacaoEntity'

export type GeneroUsuario = "homem" | "mulher"

@Entity({ name: "tb_usuario" })
export default class UsuarioEntity implements IUsuarioDTO {

    @PrimaryGeneratedColumn('uuid')
    pk_id: string;


    @Column({
        type: 'varchar',
        name: 'username',
        length: 30,
        unique: true
    })
    username: string;


    @Column({
        type: 'varchar',
        name: 'email'
    })
    email: string;


    @Column({
        type: 'char',
        name: 'password',
        length: 255  // REVIEW Escolher criptografia
    })
    password: string;


    @Column({
        type: 'varchar',
        name: 'nome',
        length: 120
    })
    nome: string;


    @Column({
        type: 'date',
        name: 'data_nasc'
    })
    data_nasc: Date;


    @Column({
        name: 'genero',
        type: "enum",
        enum: ["homem", "mulher"]
    })
    genero: GeneroUsuario


    @Column({
        type: 'char',
        name: 'cpf',
        length: 11,
        unique: true
    })
    cpf: string;


    @Column({
        type: 'char',
        name: 'rg',
        length: 9,
        unique: true
    })
    rg: string;


    @Column({
        type: 'char',
        name: 'telefone',
        length: 12
    })
    telefone?: string | undefined;


    @Column({
        type: 'varchar',
        name: 'rua',
        length: 100
    })
    rua: string;


    @Column({
        type: 'varchar',
        name: 'bairro',
        length: 100
    })
    bairro: string;


    @Column({
        type: 'varchar',
        name: 'cidade',
        length: 100
    })
    cidade: string;


    @Column({
        type: 'char',
        name: 'uf',
        length: 2
    })
    uf: string;


    @OneToMany(() => BicoEntity, (servicos_ofertados) => servicos_ofertados.fk_id_contratante)
    servicos_ofertados: BicoEntity[]


    @OneToMany(() => BicoEntity, (servicos_prestados) => servicos_prestados.fk_id_contratante)
    servicos_prestados: BicoEntity[]
    

    @OneToMany(() => InteressadoEntity, (interesse) => interesse.fk_id_usuario)
    interesses: InteressadoEntity[]
    

    @OneToMany(() => NotificacaoEntity, (fk_id_destinatario) => notificacoes_recebidas.fk_id_destinatario)
    notificacoes_recebidas: NotificacaoEntity[]

    
    @OneToMany(() => NotificacaoEntity, (fk_id_remetente) => notificacoes_enviadas.fk_id_remetente)
    notificacoes_enviadas: NotificacaoEntity[]

    
}
