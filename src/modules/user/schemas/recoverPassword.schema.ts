import { Joi } from 'celebrate';

const recoverPasswordSchema = Joi.object({
  email: Joi.string().required(),
});

export { recoverPasswordSchema };
