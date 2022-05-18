import { container, injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { UnapplyToContract } from '@modules/contract/services/UnapplyToContract';
import { ListContractService } from '@modules/contract/services/ListContractService';
import { GenerateCouponService } from '@modules/contract/services/GenerateCouponService';
import { UpdateContractService } from '@modules/contract/services/UpdateContractService';
import { CreateContractService } from '@modules/contract/services/CreateContractService';
import { SelectEmployeeService } from '@modules/contract/services/SelectEmployeeService';
import { ApplyToContractService } from '@modules/contract/services/ApplyToContractService';
import { FindContractByIdService } from '@modules/contract/services/FindContractByIdService';
import { SoftDeleteContractService } from '@modules/contract/services/SoftDeleteContractService';
import { EmployerRetrieveContactService } from '@modules/contract/services/EmployerRetrieveContactService';
import FindContractByTitleService from '@modules/contract/services/FindContractByTitleService';

@injectable()
export class ContractController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(CreateContractService);

      const data = request.body;
      const { user } = request.token.sub;

      response.status(201).json(await service.execute(data, user));
    } catch (err) {
      next(err);
    }
  }

  public async generateCoupon(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(GenerateCouponService);

      const data = request.body;
      const { id } = request.params;
      const { user } = request.token.sub;

      response.status(201).json(await service.execute(Number(id), data, user));
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

  public async findById(
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

  public async retrieveEmployeeInfo(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(EmployerRetrieveContactService);

      const { user } = request.token.sub;
      const { id } = request.params;

      response.json(await service.execute(Number(id), user));
    } catch (err) {
      next(err);
    }
  }

  public async findByTitle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(FindContractByTitleService);

      const { user } = request.token.sub;
      const { title } = request.body;

      response.json(await service.execute(title, user));
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

      const { user } = request.token.sub;
      const { id } = request.params;
      const data = request.body;

      response.json(await service.execute(Number(id), data, user));
    } catch (err) {
      next(err);
    }
  }

  public async applyToContract(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(ApplyToContractService);

      const { user } = request.token.sub;
      const { id } = request.params;

      response.json(await service.execute(Number(id), user));
    } catch (err) {
      next(err);
    }
  }

  public async unapplyToContract(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(UnapplyToContract);

      const { user } = request.token.sub;
      const { id } = request.params;

      response.json(await service.execute(Number(id), user));
    } catch (err) {
      next(err);
    }
  }

  public async selectEmployee(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(SelectEmployeeService);

      const { id, selectedUserId } = request.params;
      const { user } = request.token.sub;

      response.json(
        await service.execute(Number(id), user, Number(selectedUserId))
      );
    } catch (err) {
      next(err);
    }
  }

  public async softDelete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(SoftDeleteContractService);

      const { user } = request.token.sub;
      const { id } = request.params;

      response.json(await service.execute(Number(id), user));
    } catch (err) {
      next(err);
    }
  }
}
