import IUserDTO from '../../User/dtos/IUserDTO'
import IDefaultStatusContractDTO from '../../DefaultStatusContract/dtos/IDefaultStatusContractDTO'

export default interface IContractDTO {
  id?: number
  employee: Partial<IUserDTO>
  employer: Partial<IUserDTO>
  statusContract: Partial<IDefaultStatusContractDTO>
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}
