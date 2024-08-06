import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity({ schema: 'usuari', name: 'tbusuari' })
@Index('tbuser_no_usuari_uindex', ['no_usuari'], { unique: true })
export class UsuariPgEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  role: string;

  @Column({ type: 'boolean', nullable: true })
  il_activo: boolean | null;

  @Column({ type: 'boolean', default: false, nullable: true })
  il_usublo: boolean | null;

  @Column({ type: 'varchar', nullable: true })
  no_apepat: string | null;

  @Column({ type: 'varchar', nullable: true })
  no_apemat: string | null;

  @Column({ type: 'varchar', nullable: true })
  nu_docide: string | null;

  @Column({ type: 'varchar', nullable: true })
  no_usuari: string | null;

  @Column({ type: 'date', nullable: true })
  fe_nacimi: Date | null;

  @Column({ type: 'varchar', nullable: true })
  nu_telcel: string | null;

  @Column({ type: 'varchar', nullable: true })
  co_ubigeo: string | null;

  @Column({ type: 'boolean', default: false, nullable: true })
  il_citcli: boolean | null;
}
