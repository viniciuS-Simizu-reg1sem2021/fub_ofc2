import { Joi } from 'celebrate';

const updateUserSchema = Joi.object({
  phone: Joi.string().optional(),
  categories: Joi.array()
    .items(Joi.object({ id: Joi.number().required() }))
    .min(1),
  street: Joi.string().optional(),
  city: Joi.string().required(),
  district: Joi.string().optional(),
  state: Joi.string().optional(),
});

export { updateUserSchema };
