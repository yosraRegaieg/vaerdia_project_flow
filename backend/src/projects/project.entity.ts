import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../auth/user.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ default: 'kanban' })
  type: string;
  // 'scrum' | 'kanban'

  @Column({ default: 'planifie' })
  status: string;
  // 'planifie' | 'en_cours' | 'livre' | 'suspendu'

  @Column({ type: 'decimal', nullable: true })
  budget?: number;

  @Column({ type: 'date', nullable: true })
  startDate?: string;

  @Column({ type: 'date', nullable: true })
  endDate?: string;

  // Le chef de projet (relation vers User)
  @ManyToOne(() => User, { nullable: true, eager: true })
  chef?: User;

  @CreateDateColumn()
  createdAt: Date;
}