"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const DefaultRatingEntity_1 = __importDefault(require("../../../../DefaultRating/infra/typeorm/entities/DefaultRatingEntity"));
let CouponEntity = class CouponEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_coupon' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DefaultRatingEntity_1.default),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id', name: 'id_rating' }),
    __metadata("design:type", Object)
], CouponEntity.prototype, "ratingId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'value' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deadline' }),
    __metadata("design:type", Date)
], CouponEntity.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CouponEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CouponEntity.prototype, "UpdatedAt", void 0);
CouponEntity = __decorate([
    (0, typeorm_1.Entity)('coupons')
], CouponEntity);
exports.default = CouponEntity;
