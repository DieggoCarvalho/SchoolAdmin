import { PrismaClient } from '@prisma/client';

interface ICreateCourse {
  name: string;
  description: string;
}

const prisma = new PrismaClient();

async function createCourse({ name, description }: ICreateCourse) {
  const course = await prisma.course.create({
    data: {
      name,
      description,
    },
  });

  return course;
}

async function getAllCourses() {
  const courses = await prisma.course.findMany();

  return courses;
}

export { createCourse, getAllCourses };
