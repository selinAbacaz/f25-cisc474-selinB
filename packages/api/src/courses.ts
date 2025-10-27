import { z } from 'zod';
import { Pagination } from './queries';

// Reference DTOs (lightweight relation embeds)
export const CourseRef = z.object({
  id: z.int(),
  name: z.string(),
});
export type CourseRef = z.infer<typeof CourseRef>;

// Output DTOs (API responses)
export const CourseOut = z.object({
  id: z.int(),
  name: z.string(),
});
export type CourseOut = z.infer<typeof CourseOut>;

// Creation DTOs (API request bodies)
export const CourseCreateIn = z.object({
  name: z.string().min(1),
});
export type CourseCreateIn = z.infer<typeof CourseCreateIn>;

// Update DTOs (API request bodies)
export const CourseUpdateIn = z.object({
  id: z.int(),
  name: z.string().min(1).optional(),
});
export type CourseUpdateIn = z.infer<typeof CourseUpdateIn>;

// Query DTOs (API query parameters)
export const CoursesListFilter = Pagination.extend({
  nameLike: z.string().optional(),
});

export const DeleteCourse = z.object({
    id: z.int(),
});
export type DeleteCourse = z.infer<typeof DeleteCourse>



