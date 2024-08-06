import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariPgEntity } from './entities/usuari.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [
    TypeOrmModule.forFeature([UsuariPgEntity]),
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class LoginModule {}
