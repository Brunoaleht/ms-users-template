import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The name of the user',
    type: String || null || undefined,
    example: 'John Doe',
  })
  name?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({
    description: 'The email of the user',
    type: String || null || undefined,
    example: 'email@email.com',
  })
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The password of the user',
    type: String || null || undefined,
    example: 'password',
  })
  password?: string;
}
