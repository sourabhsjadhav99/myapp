import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.enetity'; 
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post('register')
  async register(@Body() userDto: CreateUserDto): Promise<User> {
    return this.usersService.create(userDto);
  }


  
  @Get(':username')
  async findOne(@Param('username') username: string): Promise<User | undefined> {
    return this.usersService.findOne(username); 
  }

 
 

}
