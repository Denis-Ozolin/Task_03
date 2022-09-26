const express = require('express');
const cors = require('cors');

const notesRouter = require('./routes/api/notes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRouter);

app.listen(3000);
