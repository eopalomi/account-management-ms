import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';
import { IUserPgEntity } from '../../domain/dto/user.dto';

@Injectable()
export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async (userCode: string, user: Partial<IUserPgEntity>) => {
    const savedUser = await this.userRepository.update(userCode, user);

    return savedUser;
  };
}
