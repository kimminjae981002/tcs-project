import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // Todo 생성
  @Post()
  create(
    @Body() createTodoDto: CreateTodoDto,
  ): Promise<{ success: boolean; data: Todo }> {
    return this.todoService.create(createTodoDto);
  }

  // Todo 조회
  @Get(':id')
  findOne(@Param('id') id: string): Promise<{ success: boolean; data: Todo }> {
    return this.todoService.findOne(id);
  }

  // Todo 상태 전체 조회
  @Get()
  findAll(
    @Query('status') status: 'IN PROCESS' | 'DONE' | 'IDLE',
  ): Promise<{ success: boolean; data: Todo[] }> {
    return this.todoService.findAll(status);
  }

  // Todo 수정
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<{ success: boolean; data: Todo }> {
    return this.todoService.update(id, updateTodoDto);
  }

  // Todo 삭제
  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ success: boolean }> {
    return this.todoService.delete(id);
  }
}
