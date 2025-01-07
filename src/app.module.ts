import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
=======

@Module({
  imports: [],
>>>>>>> 2486ee6932599d15b3221525b577d17c7a8c6d52
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
