import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { Todo } from '../todo/todo.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    type: 'postgres',
    host: 'localhost',
    // host 문제인가? local은 잘 된다..
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    namingStrategy: new SnakeNamingStrategy(),
    autoLoadEntities: true,
    entities: [Todo],
    logging: true,
    synchronize: true,
  }),
};
