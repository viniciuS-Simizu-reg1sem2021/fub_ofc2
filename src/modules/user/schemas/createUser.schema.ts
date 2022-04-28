import { Joi } from 'celebrate';

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  description: Joi.string().optional(),
  occupation: Joi.string().required(),
  birthDate: Joi.date().required(),
  street: Joi.string().required(),
  district: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
});

export { createUserSchema };
