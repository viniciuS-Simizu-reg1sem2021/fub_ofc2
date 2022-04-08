"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const createExampleSchema = celebrate_1.Joi.object({
    nome: celebrate_1.Joi.string().required(),
    curso: celebrate_1.Joi.string().required(),
});
exports.default = createExampleSchema;
