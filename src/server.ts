import express from 'express';

const app = express();

app.get('/', (_) => ({
  message: 'Hello World',
}));

app.listen(3333);
