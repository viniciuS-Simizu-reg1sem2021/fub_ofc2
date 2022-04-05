"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const CouponController_1 = __importDefault(require("../controllers/CouponController"));
const createCoupon_schema_1 = __importDefault(require("../../../schemas/createCoupon.schema"));
const updateCoupon_schema_1 = __importDefault(require("../../../schemas/updateCoupon.schema"));
const couponRouter = (0, express_1.Router)();
const couponController = new CouponController_1.default();
couponRouter.post('', [
    (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: createCoupon_schema_1.default }, { abortEarly: false }),
    couponController.create,
]);
couponRouter.get('', couponController.list);
couponRouter.get('/:id', couponController.find);
couponRouter.put('/:id', [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: updateCoupon_schema_1.default }, { abortEarly: false })], couponController.update);
couponRouter.delete('/:id', couponController.delete);
exports.default = couponRouter;
