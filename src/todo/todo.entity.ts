import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty({ description: '고유 아이디', example: '0001' })
  id: string;

  get formattedId(): string {
    return this.id.toString().padStart(4, '0'); // 예: 1 -> "0001"
  }

  @ApiProperty({ description: 'TODO 제목', example: 'TODO 제목입니다.' })
  @Column({ type: 'varchar', length: 36, nullable: false })
  name: string;

  @ApiProperty({
    description: 'TODO 내용',
    example: 'TODO 내용입니다.',
  })
  @Column({ type: 'text', default: '' })
  description: string;

  @ApiProperty({ description: '생성 날짜', example: '2025-01-06' })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    description: 'TODO 수정 날짜',
    example: '2025-01-06',
    required: false,
  })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date | null;

  @ApiProperty({
    description: 'TODO 시작 날짜',
    example: '2025-01-06',
    required: false,
  })
  @Column({ type: 'timestamp', nullable: true })
  startDateAt: Date | null;

  @ApiProperty({
    description: 'TODO 종료 날짜',
    example: '2025-01-06',
    required: false,
  })
  @Column({ type: 'timestamp', nullable: true })
  dueDateAt: Date | null;

  @ApiProperty({
    description: 'TODO 상태',
    example: 'IN PROCESS',
    enum: ['IN PROCESS', 'DONE', 'IDLE'],
  })
  @Column({
    type: 'enum',
    enum: ['IN PROCESS', 'DONE', 'IDLE'],
    default: 'IDLE',
  })
  status: 'IN PROCESS' | 'DONE' | 'IDLE';
}
