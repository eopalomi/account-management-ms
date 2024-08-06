import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './libs/config/env.config';
import { configSchema } from './libs/config/config.schema';
import { UserModule } from './modules/user/user.module';
import { LoginModule } from './modules/login/login.module';
import { PostgreModule } from './libs/database/postgre.module';

@Module({
  imports: [
    /* Libs */
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: configSchema,
      isGlobal: true,
    }),
    /*Libs modules*/
    PostgreModule,
    /* Modules*/
    LoginModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
