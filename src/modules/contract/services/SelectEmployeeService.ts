import { container, inject, injectable } from 'tsyringe';

import { ContractApplicationService } from '@shared/services/ContractApplicationService';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { GenerateNotificationOfContractService } from '@shared/services/GenerateNotificationOfContractService';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class SelectEmployeeService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(
    id: number,
    user: { id: number },
    selectedUserId: number
  ): Promise<void> {
    const service = container.resolve(ContractApplicationService);

    const { contract, selectedUser } = await service.execute(
      id,
      user,
      selectedUserId
    );

    if (contract.employer.id !== user.id) {
      throw new AppError(
        'You do not have permission to select the employee for this contract'
      );
    }

    await this.contractRepository.selectEmployee(id, selectedUser);

    const notificationService = container.resolve(
      GenerateNotificationOfContractService
    );

    await notificationService.execute(
      contract,
      `Congratulations! you have been selected as the employee of the job ${contract.title}, now wait for the employer ${contract.employer.name} enter in contact with you`,
      contract.employee.id as unknown as { id: number }
    );
  }
}
