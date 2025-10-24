import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { usersModule } from './users/users.module';
import { submissionsModule } from './submissions/submissions.module';
import { ProfilesModule } from './profiles/profiles.module';
import { coursesModule } from './courses/courses.module';
import { assignmentsModule } from './assignments/assignments.module';
import { AuthModule } from './Authentication/auth.module';

@Module({
  imports: [LinksModule, usersModule, submissionsModule, ProfilesModule, coursesModule, assignmentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
