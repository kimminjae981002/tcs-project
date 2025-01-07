import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
  Length,
  IsDate,
} from 'class-validator';

export class UpdateTodoDto {
  @ApiProperty({
    description: '수정할 제목을 작성해주세요.',
    example: 'TODO 중간',
    required: true,
    minLength: 4,
    maxLength: 36,
  })
  @IsString()
  @Length(4, 36)
  name: string;

  @ApiProperty({
    description: '수정할 내용을 작성해주세요.',
    example: '운동 끝, 공부 중',
    required: true,
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({
    description: '수정 날짜',
    example: '2025-01-08T12:00:00.000Z',
  })
  @IsDate()
  updatedAt: Date | null;

  @ApiProperty({
    description: '시작 날짜',
    example: '2025-01-08T12:00:00.000Z',
  })
  @IsDate()
  startDateAt: Date | null;

  @ApiProperty({
    description: '종료 날짜',
    example: '2025-01-08T12:00:00.000Z',
  })
  @IsDate()
  dueDateAt: Date | null;

  @ApiProperty({
    description: '진행 상황',
    example: 'IN PROCESS',
    enum: ['IN PROCESS', 'DONE', 'IDLE'],
  })
  @IsEnum(['IN PROCESS', 'DONE', 'IDLE'])
  status: 'IN PROCESS' | 'DONE' | 'IDLE';
}
