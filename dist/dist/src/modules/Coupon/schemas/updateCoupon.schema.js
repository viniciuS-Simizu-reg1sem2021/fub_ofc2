"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const updateCouponSchema = celebrate_1.Joi.object({
    ratingId: celebrate_1.Joi.object({ id: celebrate_1.Joi.number().required() }).optional(),
    value: celebrate_1.Joi.number().optional(),
    deadline: celebrate_1.Joi.date().optional(),
});
exports.default = updateCouponSchema;
