import express from 'express';

import notesRouter from './routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/notes', notesRouter);
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});
app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json(message);
});

app.listen(port, () => {
  console.log(`Server running. Use port: ${port}`);
});
