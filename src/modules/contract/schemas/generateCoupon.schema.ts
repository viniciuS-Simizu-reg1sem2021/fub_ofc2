import { Joi } from 'celebrate';

const generateCouponSchema = Joi.object({
  value: Joi.number().required(),
  deadline: Joi.date().required(),
  rating: Joi.object().default(null),
  isOutDeadline: Joi.boolean().default(false),
  isFinished: Joi.boolean().default(false),
  isPaid: Joi.boolean().default(false),
});

export { generateCouponSchema };
