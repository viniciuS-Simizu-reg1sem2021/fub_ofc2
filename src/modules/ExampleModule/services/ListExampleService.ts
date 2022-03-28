import { inject, injectable } from "tsyringe";
import ExampleEntity from "../infra/typeorm/entities/ExampleEntity";
import ExampleRepository from "../infra/typeorm/repositories/ExampleRepository";

@injectable()
export default class ListExampleService {
  constructor(
    @inject(ExampleRepository) private exampleRepository: ExampleRepository
  ) {}

  public async execute(): Promise<ExampleEntity[]> {
    return this.exampleRepository.list();
  }
}
