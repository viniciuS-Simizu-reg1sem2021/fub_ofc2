import { Joi } from 'celebrate'

const updateUserSchema = Joi.object({
  phone: Joi.string().optional(),
  balance: Joi.number().optional(),
  street: Joi.string().optional(),
  district: Joi.string().optional(),
  state: Joi.string().optional(),
})

export default updateUserSchema
