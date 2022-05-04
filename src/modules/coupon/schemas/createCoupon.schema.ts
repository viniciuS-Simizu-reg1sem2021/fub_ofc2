import { Joi } from 'celebrate';

const createCouponSchema = Joi.object({
  value: Joi.number().required(),
  deadline: Joi.date().required(),
  valueLostPerDay: Joi.number().required().min(1),
  rating: Joi.object().default(null),
  isOutDeadline: Joi.boolean().default(false),
  finishedDate: Joi.date().default(null),
  isFinished: Joi.boolean().default(false),
  isPaid: Joi.boolean().default(false),
  contract: Joi.object({ id: Joi.number().required() }).required(),
});

export { createCouponSchema };
