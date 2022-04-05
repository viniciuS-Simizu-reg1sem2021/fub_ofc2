"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const createContractSchema = celebrate_1.Joi.object({
    title: celebrate_1.Joi.string().required(),
    description: celebrate_1.Joi.string().default(null).optional(),
});
exports.default = createContractSchema;
