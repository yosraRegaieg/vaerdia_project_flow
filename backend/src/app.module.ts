import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { User } from './auth/user.entity';
import { Project } from './projects/project.entity';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'yosra',       // ton mot de passe PostgreSQL
      database: 'projectflow', // ton nom de base
      entities: [User, Project, Task],
      synchronize: true,       // crée les tables auto (dev uniquement)
    }),
    AuthModule,
    ProjectsModule,
    TasksModule,
  ],
})
export class AppModule {}