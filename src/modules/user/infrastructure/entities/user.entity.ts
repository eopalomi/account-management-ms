import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('tbusuari', { schema: 'usuari' })
@Index('tbuser_no_usuari_uindex', ['username'], { unique: true })
export class UserPgEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', nullable: false })
  fullName: string;

  @Column({ name: 'email', type: 'varchar', nullable: false })
  email: string;

  @Column({ name: 'password', type: 'varchar', nullable: false })
  password: string;

  @Column({ name: 'role', type: 'varchar', nullable: true })
  userRole: string;

  @Column({ name: 'il_activo', type: 'bool', nullable: true })
  isActive: boolean;

  @Column({ name: 'il_usublo', type: 'bool', default: false, nullable: true })
  isUserBlocked: boolean;

  @Column({ name: 'no_apepat', type: 'varchar', nullable: true })
  lastName: string;

  @Column({ name: 'no_apemat', type: 'varchar', nullable: true })
  motherLastName: string;

  @Column({ name: 'nu_docide', type: 'varchar', nullable: true })
  documentNumber: string;

  @Column({ name: 'no_usuari', type: 'varchar', nullable: true })
  @Index({ unique: true })
  username: string;

  @Column({ name: 'fe_nacimi', type: 'date', nullable: true })
  birthDate: string;

  @Column({ name: 'nu_telcel', type: 'varchar', nullable: true })
  mobileNumber: string;

  @Column({ name: 'co_ubigeo', type: 'varchar', nullable: true })
  ubigeoCode: string;

  @Column({ name: 'il_citcli', type: 'bool', default: false, nullable: true })
  hasAppointments: boolean;
}
