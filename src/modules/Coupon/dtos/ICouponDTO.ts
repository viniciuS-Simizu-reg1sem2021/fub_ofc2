import IDefaultRatingDTO from '../../DefaultRating/dtos/IDefaultRatingDTO'

export default interface ICouponDTO {
  id?: number
  ratingId: IDefaultRatingDTO
  value: number
  deadline: Date
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}
