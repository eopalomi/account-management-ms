import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../domain/repositories/user.repository';
import { UserPgEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { IUserPgEntity } from '../../domain/dto/user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserAdapter implements UserRepository {
  constructor(
    @InjectRepository(UserPgEntity)
    private readonly userPgEntity: Repository<UserPgEntity>,
  ) {}

  find(userCode: string): Promise<IUserPgEntity> {
    return this.userPgEntity.findOne({ where: { username: userCode } });
  }
  findAll(): Promise<IUserPgEntity[]> {
    return this.userPgEntity.find();
  }
  findModules(userCode: string) {
    throw new Error('Method not implemented.' + userCode);
  }
  create(user: Partial<IUserPgEntity>): Promise<IUserPgEntity> {
    const userSaved = this.userPgEntity.save(user);

    return userSaved;
  }
  async update(
    userCode: string,
    user: Partial<IUserPgEntity>,
  ): Promise<IUserPgEntity> {
    await this.userPgEntity.update({ username: userCode }, user);

    const userUpdated = await this.userPgEntity.findOne({
      where: { username: userCode },
    });

    if (!userUpdated) {
      throw new NotFoundException('Not Found user');
    }

    return userUpdated;
  }
  async delete(userCode: string): Promise<void> {
    const updateResult = await this.userPgEntity.update(
      { username: userCode },
      { isActive: false },
    );

    if (updateResult.affected === 0) {
      throw new NotFoundException('User Not Found');
    }
  }
}
