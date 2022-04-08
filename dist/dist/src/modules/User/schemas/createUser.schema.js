"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const createUserSchema = celebrate_1.Joi.object({
    email: celebrate_1.Joi.string().required(),
    username: celebrate_1.Joi.string().required(),
    phone: celebrate_1.Joi.string().required(),
    balance: celebrate_1.Joi.number().default(0),
    street: celebrate_1.Joi.string().required(),
    district: celebrate_1.Joi.string().required(),
    state: celebrate_1.Joi.string().required(),
});
exports.default = createUserSchema;
