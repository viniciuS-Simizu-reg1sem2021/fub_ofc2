"use strict";
exports.__esModule = true;
var celebrate_1 = require("celebrate");
var createCouponSchema = celebrate_1.Joi.object({
    value: celebrate_1.Joi.number().required(),
    deadline: celebrate_1.Joi.date().required()
});
exports["default"] = createCouponSchema;
