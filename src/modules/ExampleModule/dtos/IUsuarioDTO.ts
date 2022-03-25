export default interface IUsuarioDTO {
  pk_id: string
  username: string
  email: string
  password: string
  nome: string
  data_nasc: Date
  genero: string
  cpf: string
  rg: string
  telefone?: string
  rua: string
  bairro: string
  cidade: string
  uf: string
}
