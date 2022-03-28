import { container, injectable } from "tsyringe";
import IExampleDTO from "../../../dtos/IExampleDTO";
import { NextFunction, Request, Response } from "express";
import ListExampleService from "../../../services/ListExampleService";
import FindExampleService from "../../../services/FindExampleService";
import CreateExampleService from "../../../services/CreateExampleService";
import UpdateExampleService from "../../../services/UpdateExampleService";
import DeleteExampleService from "../../../services/DeleteExampleService";

@injectable()
export default class ExampleController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = request.body;

      const service = container.resolve(CreateExampleService);

      response.json(await service.execute(data));
    } catch (err) {
      next(err);
    }
  }

  public async list(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(ListExampleService);

      response.json(await service.execute());
    } catch (err) {
      next(err);
    }
  }

  public async find(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(FindExampleService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }

  public async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(UpdateExampleService);

      const { id } = request.params;
      const data = request.body;

      response.json(await service.execute(Number(id), data as IExampleDTO));
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(DeleteExampleService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }
}
