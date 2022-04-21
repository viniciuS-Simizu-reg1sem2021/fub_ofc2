import { Joi } from 'celebrate';

const updateNotificationSchema = Joi.object({
  content: Joi.string().optional(),
  employee: Joi.object({ id: Joi.number().required() }).optional(),
});

export { updateNotificationSchema };
