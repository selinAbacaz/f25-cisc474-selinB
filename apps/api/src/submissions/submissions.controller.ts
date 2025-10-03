import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { submissionsService } from './submissions.service';
import { PrismaService } from 'src/prisma.service';
import { submission as submissionModel } from '@repo/database';

 
@Controller()
export class submissionsController {
  constructor(
    private readonly submissionService: submissionsService,
  ) {}

  @Get('submissions')
  async getsubmissions(): Promise<submissionModel[]> {
    return this.submissionService.submissions({});
  }

  @Get('submissions/:id')
  async getsubmissionById(@Param('id') id: string): Promise<submissionModel | null> {
    return this.submissionService.submission({ id: Number(id) });
  }
}