import { UpdateResult } from "typeorm";
import IExampleDTO from "../dtos/IExampleDTO";
import { inject, injectable } from "tsyringe";
import ExampleRepository from "../infra/typeorm/repositories/ExampleRepository";

@injectable()
export default class UpdateExampleService {
  constructor(
    @inject(ExampleRepository) private exampleRepository: ExampleRepository
  ) {}

  public async execute(id: number, data: IExampleDTO): Promise<UpdateResult> {
    return this.exampleRepository.update(id, data);
  }
}
