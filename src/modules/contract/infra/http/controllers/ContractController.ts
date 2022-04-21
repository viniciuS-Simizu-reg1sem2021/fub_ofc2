import { container, injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { ListContractService } from '@modules/contract/services/ListContractService';
import { UpdateContractService } from '@modules/contract/services/UpdateContractService';
import { CreateContractService } from '@modules/contract/services/CreateContractService';
import { FindContractByIdService } from '@modules/contract/services/FindContractByIdService';
import { SoftDeleteContractService } from '@modules/contract/services/SoftDeleteContractService';

@injectable()
export class ContractController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user } = request.token.sub;
      const service = container.resolve(CreateContractService);

      const data = request.body;

      response.status(201).json(await service.execute(data));
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
      const service = container.resolve(FindContractByIdService);

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

      response.json(await service.execute(Number(id), data));
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
      const service = container.resolve(SoftDeleteContractService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }
}
