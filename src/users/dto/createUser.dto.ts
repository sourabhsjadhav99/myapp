import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto{

    @IsNumber()
    id:number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3, {message:"min length is 3 char"})
    username:string;

    @IsString()
    password:string;

    @IsString()
    role:string
}
