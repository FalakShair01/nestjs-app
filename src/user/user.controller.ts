import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto/update-user-create.dto';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService : UserService){}

  @Get()
  getUser() {
    return this.userService.findAll()
  }

  @Post()
  store(@Body() createUserDto: CreateUserDTO) {
    return this.userService.create(createUserDto)
  }

  @Patch('/:userId')
  update(@Body() updateUserDTO: UpdateUserDTO, @Param('userId', ParseIntPipe) userId: number) {
    return this.userService.update(updateUserDTO, userId)
  }


  @Delete('/:userId')
  delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId)
  }
 

  @Get('/:userId')
  getUserId(@Param('userId', ParseIntPipe) userId : number) {
    return this.userService.getUser(userId)
  }
}
