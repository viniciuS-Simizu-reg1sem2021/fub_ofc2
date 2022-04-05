import IUserDTO from '../../User/dtos/IUserDTO'
import IContractDTO from '../../Contract/dtos/IContractDTO'

export default interface INotificationDTO {
  id?: number
  employee: Partial<IUserDTO>
  employer: Partial<IUserDTO>
  contract: Partial<IContractDTO>
  content: string
}
