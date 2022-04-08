import { Joi } from 'celebrate'

const createUserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  username: Joi.string().required(),
  phone: Joi.string().required(),
  balance: Joi.number().default(0),
  // imagePath: Joi.string().optional(),
  categories: Joi.array()
    .items(Joi.object({ id: Joi.number().required() }))
    .min(3),
  street: Joi.string().required(),
  district: Joi.string().required(),
  state: Joi.string().required(),
})

export default createUserSchema
