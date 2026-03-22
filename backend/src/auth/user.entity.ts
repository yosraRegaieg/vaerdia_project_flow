import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'membre' })
  role: string;
  // 'admin' | 'chef_projet' | 'membre' | 'client'
}