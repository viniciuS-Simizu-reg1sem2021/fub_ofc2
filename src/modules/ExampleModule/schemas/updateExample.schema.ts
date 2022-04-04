import { Joi } from "celebrate";

const updateExampleSchema = Joi.object({
  nome: Joi.string().optional(),
  curso: Joi.string().optional(),
});

export default updateExampleSchema;
