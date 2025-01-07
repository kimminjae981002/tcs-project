import { Injectable, NotFoundException } from '@nestjs/common';
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

  // Todo 생성
  async create(
    createTodoDto: CreateTodoDto,
  ): Promise<{ success: boolean; data: Todo }> {
    const todo = this.todoRepository.create(createTodoDto);
    const savedTodo = await this.todoRepository.save(todo);
    return { success: true, data: savedTodo };
  }

  // Todo ID 조회
  async findOne(id: string): Promise<{ success: boolean; data: Todo }> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    // Todo 존재 하지 않으면 에러처리
    if (!todo) {
      throw new NotFoundException('TODO가 존재하지 않습니다.');
    }
    return { success: true, data: todo };
  }

  // Todo 상태 전체 조회
  async findAll(
    status: 'IN PROCESS' | 'DONE' | 'IDLE',
  ): Promise<{ success: boolean; data: Todo[] }> {
    const todos = await this.todoRepository.find({ where: { status } });
    return { success: true, data: todos };
  }

  // Todo 수정
  async update(
    id: string,
    updateTodoDto: UpdateTodoDto,
  ): Promise<{ success: boolean; data: Todo }> {
    const todo = await this.findOne(id);
    // 전 todo를 새로 덮어 씌움
    Object.assign(todo.data, updateTodoDto);
    const updatedTodo = await this.todoRepository.save(todo.data);
    return { success: true, data: updatedTodo };
  }

  // Todo 삭제
  async delete(id: string): Promise<{ success: boolean }> {
    const todo = await this.findOne(id);
    // Todo 존재 하지 않으면 에러처리
    if (!todo) {
      throw new NotFoundException('TODO가 존재하지 않습니다.');
    }
    await this.todoRepository.delete(id);

    return { success: true };
  }
}
