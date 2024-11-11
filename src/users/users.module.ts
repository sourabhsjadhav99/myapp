import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.enetity';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService],
  imports:[TypeOrmModule.forFeature([User])]
})
export class UsersModule {}
