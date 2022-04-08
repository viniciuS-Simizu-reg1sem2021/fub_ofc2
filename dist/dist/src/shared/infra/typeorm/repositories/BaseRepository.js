"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class BaseRepository {
    constructor() {
        this.repository = new typeorm_1.Repository();
    }
    async create(data) {
        return this.repository.save(data);
    }
    async delete(id) {
        await this.repository.delete(id);
    }
    async find(id) {
        return this.repository.findOne(id);
    }
    async list() {
        return this.repository.find();
    }
    async update(id, data) {
        return this.repository.update(id, data);
    }
}
exports.default = BaseRepository;
