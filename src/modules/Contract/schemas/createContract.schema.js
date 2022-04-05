"use strict";
exports.__esModule = true;
var celebrate_1 = require("celebrate");
var createContractSchema = celebrate_1.Joi.object({
    title: celebrate_1.Joi.string().required(),
    description: celebrate_1.Joi.string()["default"](null).optional()
});
exports["default"] = createContractSchema;
