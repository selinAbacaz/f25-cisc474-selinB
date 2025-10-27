import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma.service';
import { User as UserModel } from '@repo/database';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/Authentication/current-user.decorator';
import { JwtUser } from 'src/Authentication/jwt.strategy';

 
@Controller()
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) {}

  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async me(@CurrentUser() auth: JwtUser) {
    console.log(auth);
    if (!auth || !auth.userId) {
      throw new UnauthorizedException();
    }
    const user = await this.userService.user({id: auth.userId});
    if (!user) {
      throw new Error('User not found');
    }
    // Return only what your client needs (include the DB id!)
    return {
      id: user.id,
      FirstName: user.Firstname,
      LastName: user.Lastname,
      email: user.email,
      pronouns: user.pronouns,
      // optionally roles, picture, etc.
    };
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.user({ id: Number(id) });
  }

  
}