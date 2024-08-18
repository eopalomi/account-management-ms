import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindAllUserUseCase } from '../application/uses-cases/find-all-users.use-case';
import { FindUserUseCase } from '../application/uses-cases/find-user.use-case';
import { CreateUserUseCase } from '../application/uses-cases/create-user.use-case';
import { UpdateUserUseCase } from '../application/uses-cases/update-user.use-case';
import { DeleteUserUseCase } from '../application/uses-cases/delete-user.use-case';

@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(
    private findAllUserUseCase: FindAllUserUseCase,
    private findUserUseCase: FindUserUseCase,
    private createUserUseCase: CreateUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Get()
  async findAll() {
    const users = await this.findAllUserUseCase.execute();

    return { statusCode: 200, data: users };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const users = await this.findUserUseCase.execute(id);

    return { statusCode: 200, data: users };
  }

  @Get('/modules/:id')
  findModules(@Param('id') id: string) {
    return 'this.userService.findOne(+id)' + id;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<CreateUserDto>,
  ) {
    const user = await this.updateUserUseCase.execute(id, updateUserDto);

    return { statusCode: 200, data: user };
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.deleteUserUseCase.execute(id);
  }
}
