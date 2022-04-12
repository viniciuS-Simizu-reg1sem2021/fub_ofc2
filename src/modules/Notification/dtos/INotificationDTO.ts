import IUserDTO from '../../User/dtos/IUserDTO'
import IContractDTO from '../../Contract/dtos/IContractDTO'

export default interface INotificationDTO {
  id?: number
  employee: IUserDTO
  employer: IUserDTO
  contract: IContractDTO
  content: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}
