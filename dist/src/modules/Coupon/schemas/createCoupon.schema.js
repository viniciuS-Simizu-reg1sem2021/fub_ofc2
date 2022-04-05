"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const createCouponSchema = celebrate_1.Joi.object({
    value: celebrate_1.Joi.number().required(),
    deadline: celebrate_1.Joi.date().required(),
});
exports.default = createCouponSchema;
