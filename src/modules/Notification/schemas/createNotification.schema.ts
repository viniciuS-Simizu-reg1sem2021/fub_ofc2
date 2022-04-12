import { Joi } from 'celebrate'

const createNotificationSchema = Joi.object({
  employee: Joi.object({ id: Joi.number().required() }).optional(),
  employer: Joi.object({ id: Joi.number().required() }).required(),
  contract: Joi.object({ id: Joi.number().required() }).required(),
  content: Joi.string().required(),
})

export default createNotificationSchema
