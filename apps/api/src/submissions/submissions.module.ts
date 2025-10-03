import { Module } from '@nestjs/common';
import { submissionsService } from './submissions.service';
import { PrismaService } from 'src/prisma.service';
import { submissionsController } from './submissions.controller';

@Module({
  controllers: [submissionsController],
  providers: [submissionsService, PrismaService],
})
export class submissionsModule {}