
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module'; 
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.stratagy';
import { LocalStrategy } from './local.strategy';  
import { AuthController } from './auth.controller';
import { jwtConstants } from './auth.constant';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true,  // Make sure to set global: true to use the JWT strategy
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1hr' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
