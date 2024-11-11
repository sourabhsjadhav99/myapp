import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3, {message:"min length is 3 char"})
  username:string;

  @IsString()
  password:string;
  }