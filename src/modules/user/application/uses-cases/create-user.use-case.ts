import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';
import { IUserPgEntity } from '../../domain/dto/user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async (userCode: IUserPgEntity) => {
    const user = await this.userRepository.create(userCode);

    return user;
  };
}
