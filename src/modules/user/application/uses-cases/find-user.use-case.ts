import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class FindUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async (userCode: string) => {
    const user = await this.userRepository.find(userCode);

    if (!user) {
      throw new NotFoundException(`User with ID ${user} not found`);
    }

    return user;
  };
}
