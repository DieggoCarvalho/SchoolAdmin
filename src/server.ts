//let curso = 'MiniCurso Node.JS';
//alt shift f
//console.log(`Hello World Node.JS! Este é o início do ${curso}.`);
// const age: number = 1;
// console.log(age);

import express from 'express';

const app = express();

app.get('/courses', (request, response) => {
  response.send('<h1>Hello Express!</h1>');
});

app.post('/courses', (request, response) => {
  response.status(201).send();
});
app.listen(3000);
