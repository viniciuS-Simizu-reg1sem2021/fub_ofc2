import IDefaultCategoryDTO from '@modules/DefaultCategory/dtos/IDefaultCategoryDTO'
import IDefaultRatingDTO from '@modules/DefaultRating/dtos/IDefaultRatingDTO'

export default interface IUserDTO {
  id?: number
  email: string
  password: string
  username: string
  phone: string
  balance: number
  imagePath: string
  categories: IDefaultCategoryDTO[]
  ratings: IDefaultRatingDTO[]
  street: string
  district: string
  state: string
  createdAt: Date
  updatedAt: Date
}
