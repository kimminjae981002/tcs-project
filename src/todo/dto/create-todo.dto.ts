import { IsString, IsEnum, IsOptional, IsDateString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsOptional()
  @IsDateString()
  startDateAt?: Date;

  @IsOptional()
  @IsDateString()
  dueDateAt?: Date;

  @IsEnum(['IN PROCESS', 'DONE', 'IDLE'])
  status: 'IN PROCESS' | 'DONE' | 'IDLE';
}
