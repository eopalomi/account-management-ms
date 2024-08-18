import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async (userCode: string) => {
    const savedUser = await this.userRepository.delete(userCode);

    return savedUser;
  };
}
