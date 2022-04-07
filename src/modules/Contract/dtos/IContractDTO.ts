import IUserDTO from '../../User/dtos/IUserDTO'
import IDefaultStatusContractDTO from '../../DefaultStatusContract/dtos/IDefaultStatusContractDTO'

export default interface IContractDTO {
  id?: number
  employee: IUserDTO
  employer: IUserDTO
  statusContract: IDefaultStatusContractDTO
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}
