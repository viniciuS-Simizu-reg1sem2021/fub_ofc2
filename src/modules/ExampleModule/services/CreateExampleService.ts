import IExampleDTO from "../dtos/IExampleDTO";
import { inject, injectable } from "tsyringe";
import ExampleEntity from "../infra/typeorm/entities/ExampleEntity";
import ExampleRepository from "../infra/typeorm/repositories/ExampleRepository";

@injectable()
export default class CreateExampleService {
  constructor(
    @inject(ExampleRepository) private exampleRepository: ExampleRepository
  ) {}

  public async execute(data: IExampleDTO): Promise<ExampleEntity> {
    return this.exampleRepository.create(data);
  }
}
