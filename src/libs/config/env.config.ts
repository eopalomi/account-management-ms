import { EnvConfigurationType } from './types.config';

export const EnvConfiguration = (): EnvConfigurationType => ({
  environment: process.env.ENVIRONMENT,
  bdPortalManagement: {
    host: process.env.PORTAL_MANAGEMENT_DB_HOST,
    port: +process.env.PORTAL_MANAGEMENT_DB_PORT,
    database: process.env.PORTAL_MANAGEMENT_DB_DATABASE,
    username: process.env.PORTAL_MANAGEMENT_DB_USERNAME,
    password: process.env.PORTAL_MANAGEMENT_DB_PASSWORD,
  },
});
