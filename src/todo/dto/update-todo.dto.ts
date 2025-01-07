import { IsString, IsEnum, IsOptional, IsDateString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsDateString()
  startDateAt?: Date;

  @IsOptional()
  @IsDateString()
  dueDateAt?: Date;

  @IsEnum(['IN PROCESS', 'DONE', 'IDLE'])
  @IsOptional()
  status?: 'IN PROCESS' | 'DONE' | 'IDLE';
}
