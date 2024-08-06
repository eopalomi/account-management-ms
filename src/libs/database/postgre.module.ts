import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BdPortalManagement } from '../config/types.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<BdPortalManagement>('bdPortalManagement').host,
        port: config.get<BdPortalManagement>('bdPortalManagement').port,
        database: config.get<BdPortalManagement>('bdPortalManagement').database,
        username: config.get<BdPortalManagement>('bdPortalManagement').username,
        password: config.get<BdPortalManagement>('bdPortalManagement').password,
        autoLoadEntities: true,
        logging: true,
        synchronize: false, // NO TOCAR !
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class PostgreModule {}
