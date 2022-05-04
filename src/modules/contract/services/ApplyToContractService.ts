import { container, inject, injectable } from 'tsyringe';

import { ContractApplicationService } from '@shared/services/ContractApplicationService';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';

@injectable()
export class ApplyToContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const service = container.resolve(ContractApplicationService);

    const { contract, userInfo } = await service.execute(id, user);

    if (user.id === contract.employer.id) {
      throw new Error('You cannot apply to your own contract');
    }

    contract.interested.forEach((interestedUser) => {
      if (interestedUser.id === user.id) {
        throw new Error('You already has applied to this job');
      }
    });

    await this.contractRepository.applyToContract(id, userInfo);
  }
}
