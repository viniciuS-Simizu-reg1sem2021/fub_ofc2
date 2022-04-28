import { Joi } from 'celebrate';

const changePasswordSchema = Joi.object({
  password: Joi.string().required(),
  passwordVerification: Joi.string().required(),
});

export { changePasswordSchema };
