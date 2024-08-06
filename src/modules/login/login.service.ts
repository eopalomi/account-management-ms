import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { UsuariPgEntity } from './entities/usuari.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from './dto/login.dto ';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UsuariPgEntity)
    private usuariPgEntity: Repository<UsuariPgEntity>,
    private jwtService: JwtService,
  ) {}

  async signIn(loginDto: LoginDto) {
    const user = await this.usuariPgEntity.findOne({
      where: { no_usuari: loginDto.username },
    });

    if (user?.password !== loginDto.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.no_usuari };

    return { acces_token: await this.jwtService.signAsync(payload) };
  }

  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login' + createLoginDto;
  }

  findAll() {
    return this.usuariPgEntity.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login` + updateLoginDto;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }

  private generateToken() {
    return 'asdsa';
  }
}
