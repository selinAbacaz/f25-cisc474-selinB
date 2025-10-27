import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { course as CourseModel } from '@repo/database';
import {CourseOut, CourseCreateIn, DeleteCourse, CourseUpdateIn} from '@repo/api/courses'
import { AuthGuard } from '@nestjs/passport';

 
@Controller()
export class CoursesController {
  constructor(
    private readonly courseService: CoursesService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('courses')
  async getCourses(): Promise<CourseOut[]> {
    return this.courseService.courses({});
  }

  @Get('course/:id')
  async getCourseById(@Param('id') id: string): Promise<CourseOut | null> {
    return this.courseService.course({ id: Number(id) });
  }
 @UseGuards(AuthGuard('jwt'))
  @Post('courses')
  async addCourse(@Body() createCourseDto: CourseCreateIn): Promise<CourseOut> {
    return this.courseService.create(createCourseDto);
  }
 
   @UseGuards(AuthGuard('jwt'))
  @Put('courses')
  async editCourse(@Body() editCourseDto: CourseUpdateIn): Promise<CourseOut> {
    return this.courseService.update(editCourseDto.id, editCourseDto);
  }

   @UseGuards(AuthGuard('jwt'))
  @Delete('courses')
  async removeCourse(@Body() deleteCourseDto: DeleteCourse): Promise<CourseOut> {
    return this.courseService.remove(deleteCourseDto.id);
  }
  
}

