import IDefaultStatusContractDTO from "../../../dtos/IDefaultStatusContractDTO";

export default class DefaultStatusContractEntity
  implements IDefaultStatusContractDTO
{
  id?: number;
  defaultStatusContract: string;
}
