import { Joi } from 'celebrate';

const changePasswordSchema = Joi.object({
  password: Joi.string().required().min(8),
  passwordVerification: Joi.string().required().min(8),
});

export { changePasswordSchema };
