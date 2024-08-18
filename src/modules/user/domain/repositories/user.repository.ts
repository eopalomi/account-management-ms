import { IUserPgEntity } from '../dto/user.dto';

export abstract class UserRepository {
  abstract find(userCode: string): Promise<IUserPgEntity>;
  abstract findAll(): Promise<IUserPgEntity[]>;
  abstract findModules(userCode: string);
  abstract create(user: Partial<IUserPgEntity>): Promise<IUserPgEntity>;
  abstract update(
    userCode: string,
    user: Partial<IUserPgEntity>,
  ): Promise<IUserPgEntity>;
  abstract delete(userCode: string): void;
}
