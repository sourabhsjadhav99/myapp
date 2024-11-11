
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwtPayload.interface'; 
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Validate user credentials and generate JWT token
  async validateUser(username: string, password: string): Promise<any> {
  
      const user = await this.usersService.findOne(username);
      if (user && await bcrypt.compare(password, user.password)) {
        return user;
      }
    
      throw new UnauthorizedException()

  }

  async login(user: { username: string; password: string }): Promise<any> {
      const validatedUser = await this.validateUser(user.username, user.password);

      if (!validatedUser) {
        throw new UnauthorizedException()
      }

      // Payload for JWT
      const payload: JwtPayload = {
        username: validatedUser.username,
        sub: validatedUser.id,
        role: validatedUser.role,
      };

      return this.generateToken(payload)
  }

  async generateToken(payload:JwtPayload){
    return await this.jwtService.sign(payload);
  }
  
}
