import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  // Todo 항목 생성
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    return await this.todoRepository.save(todo);
  }

  // Todo 항목 조회 (ID로 조회)
  async findOne(id: string): Promise<Todo> {
    return await this.todoRepository.findOne({ where: { id } });
  }

  // Todo 항목 조회 (상태로 조회)
  async findAll(status: 'IN PROCESS' | 'DONE' | 'IDLE'): Promise<Todo[]> {
    return await this.todoRepository.find({ where: { status } });
  }

  // Todo 항목 업데이트
  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.findOne(id);
    Object.assign(todo, updateTodoDto);
    return await this.todoRepository.save(todo);
  }

  // Todo 항목 삭제
  async delete(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
