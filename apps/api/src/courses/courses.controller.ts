import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { PrismaService } from 'src/prisma.service';
import { course as CourseModel } from '@repo/database';

 
@Controller()
export class CoursesController {
  constructor(
    private readonly courseService: CoursesService,
  ) {}

  @Get('courses')
  async getCourses(): Promise<CourseModel[]> {
    return this.courseService.courses({});
  }

  @Get('course/:id')
  async getCourseById(@Param('id') id: string): Promise<CourseModel | null> {
    return this.courseService.course({ id: Number(id) });
  }
}