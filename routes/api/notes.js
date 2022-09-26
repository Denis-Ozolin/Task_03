const express = require('express');
const { v4 } = require('uuid');

const notes = require('../../data/notes');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result: notes,
    },
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = notes.find((item) => item.id === id);
  if (!result) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: `Notes with id ${id} not found`,
    });
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
});

router.post('/', (req, res) => {
  const newNote = { ...req.body, id: v4() };
  notes.push(newNote);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newNote,
    },
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const result = notes.filter((item) => item.id !== id);
  const notes = [...result];

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newNote,
    },
  });
});

module.exports = router;
