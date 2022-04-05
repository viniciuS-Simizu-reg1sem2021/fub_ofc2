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
const UserEntity_1 = __importDefault(require("@modules/User/infra/typeorm/entities/UserEntity"));
let ContractEntity = class ContractEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_contract' }),
    __metadata("design:type", Number)
], ContractEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserEntity_1.default),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id', name: 'id_employee' }),
    __metadata("design:type", Object)
], ContractEntity.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'employer' }),
    __metadata("design:type", Object)
], ContractEntity.prototype, "employer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'default_status_contract' }),
    __metadata("design:type", Object)
], ContractEntity.prototype, "statusContract", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title' }),
    __metadata("design:type", String)
], ContractEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description' }),
    __metadata("design:type", String)
], ContractEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ContractEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ContractEntity.prototype, "updatedAt", void 0);
ContractEntity = __decorate([
    (0, typeorm_1.Entity)('contracts')
], ContractEntity);
exports.default = ContractEntity;
