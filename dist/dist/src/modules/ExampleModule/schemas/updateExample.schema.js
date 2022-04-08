"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const updateExampleSchema = celebrate_1.Joi.object({
    nome: celebrate_1.Joi.string().optional(),
    curso: celebrate_1.Joi.string().optional(),
});
exports.default = updateExampleSchema;
