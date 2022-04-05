"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const updateUserSchema = celebrate_1.Joi.object({
    phone: celebrate_1.Joi.string().optional(),
    balance: celebrate_1.Joi.number().optional(),
    street: celebrate_1.Joi.string().optional(),
    district: celebrate_1.Joi.string().optional(),
    state: celebrate_1.Joi.string().optional(),
});
exports.default = updateUserSchema;
