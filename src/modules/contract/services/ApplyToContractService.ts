import { container, inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IContractRepository } from '@modules/contract/repositories/IContractRepository';
import { ApplicationAndSelectionToContractHelper } from '@shared/helpers/ApplicationAndSelectionToContractHelper';

@injectable()
export class ApplyToContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const helper = container.resolve(ApplicationAndSelectionToContractHelper);

    const { contract, foundUser } = await helper.execute(id, user);

    contract.interested.forEach((interestedUser) => {
      // @ts-ignore
      if (interestedUser === user.id) {
        throw new Error('You already has applied to this job');
      }
    });

    await this.contractRepository.applyToContract(id, foundUser);
  }
}
