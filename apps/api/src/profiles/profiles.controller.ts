import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { PrismaService } from 'src/prisma.service';
import { Profile as ProfileModel } from '@repo/database';

 
@Controller()
export class ProfilesController {
  constructor(
    private readonly profileService: ProfilesService,
  ) {}

  @Get('profiles')
  async getProfiles(): Promise<ProfileModel[]> {
    return this.profileService.profiles({});
  }

  @Get('profile/:id')
  async getProfileById(@Param('id') id: string): Promise<ProfileModel | null> {
    return this.profileService.profile({ id: Number(id) });
  }
}