import {
  IsString,
  IsEnum,
  IsOptional,
  IsDateString,
  IsDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateTodoDto {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ApiProperty({
    description: '제목을 작성해주세요.',
    example: 'TODO 시작',
    required: true,
    minLength: 4,
    maxLength: 36,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: '할 일을 작성해주세요.',
    example: '운동, 저녁, 공부',
    required: true,
    default: '',
  })
  @IsString()
  description: string = '';

  @ApiProperty({
    description: '생성 날짜',
    example: '2025-01-08T12:00:00.000Z',
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    description: '갱신 날짜',
    example: '2025-01-09T12:00:00.000Z',
    required: false,
    nullable: true,
  })
  @IsDate()
  @IsOptional()
  updatedAt: Date | null = null;

  @ApiProperty({
    description: '시작 날짜',
    example: '2025-01-10T12:00:00.000Z',
    required: false,
    nullable: true,
  })
  @IsDateString()
  @IsDate()
  startDateAt: Date | null = null;

  @ApiProperty({
    description: '종료 날짜',
    example: '2025-01-15T12:00:00.000Z',
    required: false,
    nullable: true,
  })
  @IsDate()
  @IsOptional()
  dueDateAt: Date | null = null;

  @ApiProperty({
    description: '진행 상황',
    example: 'IN PROCESS',
    enum: ['IN PROCESS', 'DONE', 'IDLE'],
  })
  @IsEnum(['IN PROCESS', 'DONE', 'IDLE'])
  status: 'IN PROCESS' | 'DONE' | 'IDLE';
}
