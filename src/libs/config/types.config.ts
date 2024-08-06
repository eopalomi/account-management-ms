export interface EnvConfigurationType {
  environment: string;
  bdPortalManagement: BdPortalManagement;
}

export interface BdPortalManagement {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
}
