export default interface IUserDTO {
  id?: number
  email: string
  // password: string // TODO: verificar se a password é armanezada ou não no db
  username: string
  phone: string
  balance: number
  street: string
  district: string
  state: string
  createdAt: Date
  updatedAt: Date
}
