
import { Controller, Post, Body, UseInterceptors, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth') 
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login') 
  async login(@Body() loginDto: LoginDto): Promise<{ access_token: string }> {
    return this.authService.login(loginDto);
  }

}
