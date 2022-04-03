import IDefaultRatingDTO from '../../DefaultRating/dtos/IDefaultRatingDTO'

export default interface ICouponDTO {
  id?: number
  ratingId: Partial<IDefaultRatingDTO>
  value: number
  deadline: Date
  createdAt: Date
  UpdatedAt: Date
}
