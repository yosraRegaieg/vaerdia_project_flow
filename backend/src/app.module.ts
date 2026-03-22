import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',       // your PostgreSQL username
      password: 'yosra',  // your PostgreSQL password
      database: 'projectflow',    // your DB name
      entities: [User],
      synchronize: true,          // auto create tables (only dev)
    }),
    AuthModule,
  ],
})
export class AppModule {}