export default interface IBaseRepository<Interface, Entity> {
  create(data: Interface): Promise<Entity>

  list(): Promise<Entity[]>

  find(id: number): Promise<Entity | undefined>

  update(id: number, data: Partial<Interface>): Promise<void>

  delete(id: number): Promise<void>
}
