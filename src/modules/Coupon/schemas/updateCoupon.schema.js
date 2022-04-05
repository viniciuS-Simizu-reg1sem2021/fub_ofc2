"use strict";
exports.__esModule = true;
var celebrate_1 = require("celebrate");
var updateCouponSchema = celebrate_1.Joi.object({
    ratingId: celebrate_1.Joi.object({ id: celebrate_1.Joi.number().required() }).optional(),
    value: celebrate_1.Joi.number().optional(),
    deadline: celebrate_1.Joi.date().optional()
});
exports["default"] = updateCouponSchema;
