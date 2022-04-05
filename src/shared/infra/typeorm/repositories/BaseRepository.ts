import IBaseRepository from './IBaseRepository'
import { getRepository, Repository, UpdateResult } from 'typeorm'

declare type ClassType<T> = new (...args: never[]) => T

export default abstract class BaseRepository<Interface, Entity>
  implements IBaseRepository<Interface, Entity>
{
  protected repository: Repository<Entity>

  protected constructor(entity: ClassType<Entity>) {
    this.repository = getRepository(entity)
  }

  async create(data: Interface): Promise<Entity> {
    return this.repository.save(data)
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id)
  }

  async find(id: number): Promise<Entity | undefined> {
    return this.repository.findOne(id)
  }

  async list(): Promise<Entity[]> {
    return this.repository.find()
  }

  async update(id: number, data: Interface): Promise<UpdateResult> {
    return this.repository.update(id, data)
  }
}
