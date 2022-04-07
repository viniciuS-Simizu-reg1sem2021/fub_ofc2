import { Joi } from 'celebrate'

const updateUserSchema = Joi.object({
  phone: Joi.string().optional(),
  balance: Joi.number().optional(),
  categories: Joi.array()
    .items(Joi.object({ id: Joi.number().required() }))
    .min(3),
  street: Joi.string().optional(),
  district: Joi.string().optional(),
  state: Joi.string().optional(),
})

export default updateUserSchema
