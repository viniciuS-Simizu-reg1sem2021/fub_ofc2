import { inject, injectable } from 'tsyringe';

import { IContractDTO } from '@modules/contract/dtos/IContractDTO';
import { INotificationRepository } from '@modules/notification/repositories/INotificationRepository';

@injectable()
export class GenerateNotificationOfContractService {
  constructor(
    @inject('NotificationRepository')
    private notificationRepository: INotificationRepository
  ) {}

  public async execute(contract: IContractDTO, content: string): Promise<void> {
    await this.notificationRepository.create({
      contract,
      employer: contract.employer,
      employee: contract.employee,
      content,
    });
  }
}
