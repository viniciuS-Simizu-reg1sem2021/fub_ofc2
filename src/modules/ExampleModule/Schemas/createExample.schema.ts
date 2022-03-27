import { Joi } from "celebrate";

const createExampleSchema = Joi.object({
  nome: Joi.string().required(),
  curso: Joi.string().required(),
});

export default createExampleSchema;
