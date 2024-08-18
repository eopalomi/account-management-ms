export interface IUserPgEntity {
  fullName: string;
  email: string;
  password: string;
  userRole?: string;
  isActive?: boolean;
  isUserBlocked?: boolean;
  lastName?: string;
  motherLastName?: string;
  documentNumber?: string;
  username?: string;
  birthDate?: string;
  mobileNumber?: string;
  ubigeoCode?: string;
  hasAppointments?: boolean;
}
