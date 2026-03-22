import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../auth/user.entity';
import { Project } from '../projects/project.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ default: 'todo' })
  status: string;
  // Kanban : 'todo' | 'doing' | 'review' | 'done'
  // Scrum  : 'todo' | 'en_cours' | 'en_test' | 'termine'

  @Column({ default: 'tache' })
  type: string;
  // 'tache' | 'user_story' | 'bug'

  @Column({ nullable: true })
  priority?: string;
  // 'basse' | 'moyenne' | 'haute'

  @Column({ nullable: true })
  storyPoints?: number;

  @Column({ nullable: true })
  sprintId?: number;

  // Projet auquel appartient la tâche
  @ManyToOne(() => Project, { nullable: false, onDelete: 'CASCADE' })
  project: Project;

  // Membre assigné à la tâche
  @ManyToOne(() => User, { nullable: true, eager: true })
  assignee?: User;

  @CreateDateColumn()
  createdAt: Date;
}