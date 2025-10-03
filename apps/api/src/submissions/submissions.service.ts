import { Injectable } from '@nestjs/common';
import { submission, Prisma } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class submissionsService {
  constructor(private prisma: PrismaService) {}

  async submission(
    submissionWhereUniqueInput: Prisma.submissionWhereUniqueInput,
  ): Promise<submission | null> {
    return this.prisma.submission.findUnique({
      where: submissionWhereUniqueInput,
    });
  }

  async submissions(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.submissionWhereUniqueInput;
    where?: Prisma.submissionWhereInput;
    orderBy?: Prisma.submissionOrderByWithRelationInput;
  }): Promise<submission[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.submission.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}