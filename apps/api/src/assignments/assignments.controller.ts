import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { PrismaService } from 'src/prisma.service';
import { assignment as AssignmentModel } from '@repo/database';

 
@Controller()
export class AssignmentsController {
  constructor(
    private readonly assignmentService: AssignmentsService,
  ) {}

  @Get('assignments')
  async getAssignments(): Promise<AssignmentModel[]> {
    return this.assignmentService.assignments({});
  }

  @Get('assignment/:id')
  async getAssignmentById(@Param('id') id: string): Promise<AssignmentModel | null> {
    return this.assignmentService.assignment({ id: Number(id) });
  }
}