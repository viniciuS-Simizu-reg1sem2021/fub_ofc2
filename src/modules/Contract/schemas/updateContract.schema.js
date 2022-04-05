"use strict";
exports.__esModule = true;
var celebrate_1 = require("celebrate");
var updateContractSchema = celebrate_1.Joi.object({
    title: celebrate_1.Joi.string().optional(),
    description: celebrate_1.Joi.string().optional()
});
exports["default"] = updateContractSchema;
