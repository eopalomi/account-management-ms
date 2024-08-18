import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  userRole?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isUserBlocked?: boolean;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  motherLastName?: string;

  @IsOptional()
  @IsString()
  documentNumber?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  @IsString()
  mobileNumber?: string;

  @IsOptional()
  @IsString()
  ubigeoCode?: string;

  @IsOptional()
  @IsBoolean()
  hasAppointments?: boolean;
}
