import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { course as CourseModel } from '@repo/database';
import {CourseOut, CourseCreateIn, DeleteCourse, CourseUpdateIn} from '@repo/api/courses'

 
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

  @Post('courses')
  async addCourse(@Body() createCourseDto: CourseCreateIn): Promise<CourseOut> {
    return this.courseService.create(createCourseDto);
  }
 
  @Put('courses')
  async editCourse(@Body() editCourseDto: CourseUpdateIn): Promise<CourseOut> {
    return this.courseService.update(editCourseDto.id, editCourseDto);
  }

  @Delete('courses')
  async removeCourse(@Body() deleteCourseDto: DeleteCourse): Promise<CourseOut> {
    return this.courseService.remove(deleteCourseDto.id);
  }
  
}

