import {
  IsString,
  IsEnum,
  IsOptional,
  IsDateString,
  Length,
} from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @Length(4, 36)
  id: string;

  @IsString()
  @Length(4, 36)
  name: string;

  @IsOptional()
  @IsString()
  description: string = '';

  @IsDateString()
  createdAt: string;

  @IsDateString()
  @IsOptional()
  updatedAt: string | null = null;

  @IsDateString()
  @IsOptional()
  startDateAt: string | null = null;

  @IsDateString()
  @IsOptional()
  dueDateAt: string | null = null;

  @IsEnum(['IN PROCESS', 'DONE', 'IDLE'])
  status: 'IN PROCESS' | 'DONE' | 'IDLE';
}
