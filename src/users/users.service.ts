import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './users.enetity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    let user = this.usersRepository.findOne({ where: { username } });
    return user;
  }

  async create(userDto: CreateUserDto): Promise<any> {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);

    const user = this.usersRepository.create({
      ...userDto,
      password: hashedPassword,
    });

    return await this.usersRepository.save(user);
  }
}
