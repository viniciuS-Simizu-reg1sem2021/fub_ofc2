import { inject, injectable } from "tsyringe";
import ExampleEntity from "../infra/typeorm/entities/ExampleEntity";
import ExampleRepository from "../infra/typeorm/repositories/ExampleRepository";

@injectable()
export default class FindExampleService {
  constructor(
    @inject(ExampleRepository) private exampleRepository: ExampleRepository
  ) {}

  public async execute(id: number): Promise<ExampleEntity | undefined> {
    return this.exampleRepository.find(id);
  }
}
