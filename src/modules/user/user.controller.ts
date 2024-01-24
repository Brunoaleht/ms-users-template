import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiDocGenericPost } from 'src/app/common/api-doc-generic-post.decorator';
import { ApiDocGenericPatch } from 'src/app/common/api-doc-generic-patch.decorator';
import { ApiDocGenericDelete } from 'src/app/common/api-doc-generic-delete.decorator';
import { ApiDocGenericGetOne } from 'src/app/common/api-doc-generic-get-one.decorator';
import { ApiDocGenericGetAll } from 'src/app/common/api-doc-generic-get-all.decorator';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiDocGenericPost('user-create', CreateUserDto, UserDto)
  async create(@Body() body: CreateUserDto): Promise<UserDto> {
    return await this.userService.create(body);
  }

  @Patch(':userId')
  @ApiDocGenericPatch('user-update', UpdateUserDto, UserDto)
  async update(
    @Param('userId') userId: number,
    @Body() body: UpdateUserDto,
  ): Promise<UserDto> {
    return await this.userService.update(+userId, body);
  }

  @Delete(':userId')
  @ApiDocGenericDelete('user-delete', UserDto)
  async remove(@Param('userId') userId: number): Promise<UserDto> {
    return await this.userService.remove(+userId);
  }

  @Get(':userId')
  @ApiDocGenericGetOne('user-get-one', UserDto)
  async findOne(@Param('userId') userId: number): Promise<UserDto> {
    return await this.userService.findOne(+userId);
  }

  @Get()
  @ApiDocGenericGetAll('user-get-all', UserDto)
  async findAll(): Promise<UserDto[]> {
    return await this.userService.findAll();
  }
}
