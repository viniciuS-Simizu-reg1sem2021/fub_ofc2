import { Joi } from 'celebrate'

const updateCouponSchema = Joi.object({
  ratingId: Joi.object({ id: Joi.number().required() }).optional(),
  value: Joi.number().optional(),
  deadline: Joi.date().optional(),
})

export default updateCouponSchema
