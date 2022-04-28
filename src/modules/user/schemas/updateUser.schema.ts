import { Joi } from 'celebrate';

const updateUserSchema = Joi.object({
  phone: Joi.string().optional(),
  description: Joi.string().optional(),
  occupation: Joi.string().required(),
  birthDate: Joi.date().required(),
  street: Joi.string().optional(),
  city: Joi.string().required(),
  district: Joi.string().optional(),
  state: Joi.string().optional(),
});

export { updateUserSchema };
