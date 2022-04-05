"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const updateContractSchema = celebrate_1.Joi.object({
    title: celebrate_1.Joi.string().optional(),
    description: celebrate_1.Joi.string().optional(),
});
exports.default = updateContractSchema;
