import {
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
  Length,
} from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @Length(4, 36)
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsDateString()
  updatedAt: string | null;

  @IsOptional()
  @IsDateString()
  startDateAt: string | null;

  @IsOptional()
  @IsDateString()
  dueDateAt: string | null;

  @IsOptional()
  @IsEnum(['IN PROCESS', 'DONE', 'IDLE'])
  status: 'IN PROCESS' | 'DONE' | 'IDLE';
}
