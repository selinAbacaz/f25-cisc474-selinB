import { Injectable } from '@nestjs/common';
import { course, Prisma } from '@repo/database';
import { PrismaService } from 'src/prisma.service';
import { CourseCreateIn, CourseUpdateIn, CourseOut } from '@repo/api/courses';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async course(
    courseWhereUniqueInput: Prisma.courseWhereUniqueInput,
  ): Promise<course | null> {
    return this.prisma.course.findUnique({
      where: courseWhereUniqueInput,
    });
  }

  async courses(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.courseWhereUniqueInput;
    where?: Prisma.courseWhereInput;
    orderBy?: Prisma.courseOrderByWithRelationInput;
  }): Promise<course[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.course.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(createCourseDto: CourseCreateIn): Promise<CourseOut> {
    const newCourse = await this.prisma.course.create({
      data: createCourseDto,
    });
    return {
      name: newCourse.name,
      id: newCourse.id,
    };
  }

  update(id: number, updateCourseDto: CourseUpdateIn) {
    return this.prisma.course.update({
      where: { id},
      data: updateCourseDto,
    });
  }

  remove(id: number) {
    return this.prisma.course.delete({
      where: { id },
    });
  }

}