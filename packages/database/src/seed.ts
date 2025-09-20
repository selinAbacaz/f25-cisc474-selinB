import { prisma } from "./client";

//import type { User } from "../generated/client";
import { users, profiles, courses, assignments, submissions} from "./testData.json";



(async () => {
  try {
    await Promise.all(
      users.map(async(user) => {
        await prisma.user.create({ data: {id: user.id, email: user.email, Firstname: user.Firstname, Lastname: user.Lastname, pronouns: user.pronouns} });

      }
    ));
    await Promise.all(
      profiles.map(async(profile) => {
        await prisma.profile.create({ data: {id: profile.id, bio: profile.bio, userId: profile.userId} });

      }
    ));
    await Promise.all(
      courses.map(async(course) => {
        await prisma.course.create({ data: {id: course.id, name: course.name} });

      }
    ));
    await Promise.all(
      assignments.map(async(assignment) => {
        await prisma.assignment.create({ data: {id: assignment.id, courseId: assignment.courseId, authorId: assignment.authorId, createdAt: assignment.createdAt, fileType: assignment.fileType, published: assignment.published, title: assignment.title, updatedAt: assignment.updatedAt} });

      }
    ));
    await Promise.all(
      submissions.map(async(submission) => {
        await prisma.submission.create({ data: {id: submission.id, assignmentId: submission.assignmentId, authorId: submission.authorId, fileName: submission.fileName, submittedAt: submission.submittedAt} });

      }
    ));


  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
