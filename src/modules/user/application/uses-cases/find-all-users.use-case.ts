import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class FindAllUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async () => {
    const users = await this.userRepository.findAll();

    if (!users) {
      throw new NotFoundException(`not found`);
    }

    return users;
  };
}
