//let curso = 'MiniCurso Node.JS';
//alt shift f
//console.log(`Hello World Node.JS! Este é o início do ${curso}.`);
// const age: number = 1;
// console.log(age);

import express from 'express';
import { createCourse, getAllCourses } from './repository';

const app = express();

// let course: any = {};

app.use(express.json());

app.get('/courses', async (request, response) => {
  // response.send('<h1>Hello Express!</h1>');
  // return response.json(course);
  const courses = await getAllCourses();

  const result = {
    courses, //courses: courses(variavel)
  };
  // return response.json(courses);
  return response.json(result);
});

app.post('/courses', async (request, response) => {
  // const name = request.body.name;
  // const description = request.body.description;
  const { name, description } = request.body;

  const course = await createCourse({ name, description });

  // return response.status(201).send();
  // course = {
  //   name: 'Node.JS',
  //   description: 'Introdução ao Node.JS',
  // };

  // course = {
  //   name: name,
  //   description: description,
  // };
  // course = {
  //   name,
  //   description,
  // };

  return response.status(201).json(course);
});

// function serverIsRunning() {
//   console.log('Server is running.');
// };

app.listen(3000, () => {
  console.log('Server is running.');
});
