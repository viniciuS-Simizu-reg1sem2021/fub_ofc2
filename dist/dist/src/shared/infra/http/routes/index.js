"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const user_routes_1 = __importDefault(require("../../../../modules/User/infra/http/routes/user.routes"));
const coupon_routes_1 = __importDefault(require("../../../../modules/Coupon/infra/http/routes/coupon.routes"));
const contract_routes_1 = __importDefault(require("../../../../modules/Contract/infra/http/routes/contract.routes"));
const example_routes_1 = __importDefault(require("../../../../modules/ExampleModule/infra/http/routes/example.routes"));
exports.mainRouter = (0, express_1.Router)();
exports.mainRouter.use('/contract', contract_routes_1.default);
exports.mainRouter.use('/example', example_routes_1.default);
exports.mainRouter.use('/coupon', coupon_routes_1.default);
exports.mainRouter.use('/user', user_routes_1.default);
exports.default = { mainRouter: exports.mainRouter };
