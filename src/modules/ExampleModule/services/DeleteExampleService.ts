import { inject, injectable } from "tsyringe";
import ExampleRepository from "../infra/typeorm/repositories/ExampleRepository";

@injectable()
export default class DeleteExampleService {
  constructor(
    @inject(ExampleRepository) private exampleRepository: ExampleRepository
  ) {}

  public async execute(id: number): Promise<void> {
    await this.exampleRepository.delete(id);
  }
}
