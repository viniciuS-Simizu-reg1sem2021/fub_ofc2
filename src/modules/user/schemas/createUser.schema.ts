import { Joi } from 'celebrate';

const createUserSchema = Joi.object({
  realName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  username: Joi.string().required(),
  phone: Joi.string().required(),
  categories: Joi.array()
    .items(Joi.object({ id: Joi.number().required() }))
    .min(1),
  street: Joi.string().required(),
  district: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
});

export { createUserSchema };
