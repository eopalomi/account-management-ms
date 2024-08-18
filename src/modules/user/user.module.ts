import { Module } from '@nestjs/common';
import { UserController } from './presentation/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPgEntity } from './infrastructure/entities/user.entity';
import { UserRepository } from './domain/repositories/user.repository';
import { UserAdapter } from './infrastructure/adapters/user.adapter';
import { FindAllUserUseCase } from './application/uses-cases/find-all-users.use-case';
import { FindUserUseCase } from './application/uses-cases/find-user.use-case';
import { CreateUserUseCase } from './application/uses-cases/create-user.use-case';
import { UpdateUserUseCase } from './application/uses-cases/update-user.use-case';
import { DeleteUserUseCase } from './application/uses-cases/delete-user.use-case';

@Module({
  controllers: [UserController],
  providers: [
    FindAllUserUseCase,
    FindUserUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    {
      provide: UserRepository,
      useClass: UserAdapter,
    },
  ],
  imports: [TypeOrmModule.forFeature([UserPgEntity])],
})
export class UserModule {}
