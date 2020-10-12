import express from 'express';

const app = express();

app.get('/', (response) => {
  message: 'Hello World'
})

app.listen(3333);