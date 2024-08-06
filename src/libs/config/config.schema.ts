import * as Joi from 'joi';

export const configSchema = Joi.object({
  ENVIRONMENT: Joi.required(),
  PORTAL_MANAGEMENT_DB_HOST: Joi.required(),
  PORTAL_MANAGEMENT_DB_PORT: Joi.required(),
  PORTAL_MANAGEMENT_DB_DATABASE: Joi.required(),
  PORTAL_MANAGEMENT_DB_USERNAME: Joi.required(),
  PORTAL_MANAGEMENT_DB_PASSWORD: Joi.required(),
});
