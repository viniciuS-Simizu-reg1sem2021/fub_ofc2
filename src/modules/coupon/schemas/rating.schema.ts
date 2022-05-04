import { Joi } from 'celebrate';

const ratingSchema = Joi.object({
  ratingId: Joi.number().required(),
});

export { ratingSchema };
