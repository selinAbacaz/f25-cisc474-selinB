import { Injectable } from '@nestjs/common';
import { assignment, Prisma } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AssignmentsService {
  constructor(private prisma: PrismaService) {}

  async assignment(
    assignmentWhereUniqueInput: Prisma.assignmentWhereUniqueInput,
  ): Promise<assignment | null> {
    return this.prisma.assignment.findUnique({
      where: assignmentWhereUniqueInput,
    });
  }

  async assignments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.assignmentWhereUniqueInput;
    where?: Prisma.assignmentWhereInput;
    orderBy?: Prisma.assignmentOrderByWithRelationInput;
  }): Promise<assignment[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.assignment.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}