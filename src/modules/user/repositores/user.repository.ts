import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserDto } from '../dtos/user.dto';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: CreateUserDto): Promise<UserDto> {
    const newUser = await this.prismaService.users.create({ data: user });
    return newUser;
  }

  async update(userId: number, user: UpdateUserDto): Promise<UserDto> {
    const updatedUser = await this.prismaService.users.update({
      where: { id: userId },
      data: user,
    });

    return updatedUser;
  }

  async remove(userId: number): Promise<UserDto> {
    // return this.users;
    const deletedUser = await this.prismaService.users.delete({
      where: { id: userId },
    });
    return deletedUser;
  }

  async findOne(userId: number): Promise<UserDto> {
    // const foundUser = this.users.find((user) => user.id == userId);
    const user = await this.prismaService.users.findUnique({
      where: { id: userId },
    });
    return user;
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.prismaService.users.findMany();

    return users;
  }
}
