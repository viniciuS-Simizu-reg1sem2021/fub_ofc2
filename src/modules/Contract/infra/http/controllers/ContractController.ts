import { container, injectable } from 'tsyringe';
import IContractDTO from '../../../dtos/IContractDTO';
import { NextFunction, Request, Response } from 'express';
import ListContractService from '../../../services/ListContractService';
import FindContractService from '../../../services/FindContractService';
import CreateContractService from '../../../services/CreateContractService';
import UpdateContractService from '../../../services/UpdateContractService';
import DeleteContractService from '../../../services/DeleteContractService';

@injectable()
export default class ContractController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user } = request.token.sub;
      const service = container.resolve(CreateContractService);

      const data = request.body;

      response.json(await service.execute(data as IContractDTO));
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
      const service = container.resolve(ListContractService);

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
      const service = container.resolve(FindContractService);

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
      const service = container.resolve(UpdateContractService);

      const { id } = request.params;
      const data = request.body;

      response.json(await service.execute(Number(id), data as IContractDTO));
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
      const service = container.resolve(DeleteContractService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }
}
