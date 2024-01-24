import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositores/user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: CreateUserDto): Promise<UserDto> {
    return await this.userRepository.create(user);
  }

  async update(userId, user: UpdateUserDto): Promise<UserDto> {
    const updatedUser = await this.userRepository.update(userId, user);
    return updatedUser;
  }

  async remove(userId: number): Promise<UserDto> {
    return await this.userRepository.remove(userId);
  }

  async findOne(userId: number): Promise<UserDto> {
    return await this.userRepository.findOne(userId);
  }

  async findAll(): Promise<UserDto[]> {
    return await this.userRepository.findAll();
  }
}
