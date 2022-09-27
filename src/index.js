const express = require('express');
const cors = require('cors');

const notesRouter = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/notes', notesRouter);
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});
app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json(message);
});

app.listen(3000, () => {
  console.log('Server running');
});
