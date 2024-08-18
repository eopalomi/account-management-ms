import { Injectable, UnauthorizedException } from '@nestjs/common';
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
}
