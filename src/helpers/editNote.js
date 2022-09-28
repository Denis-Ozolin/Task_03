const getAllNotes = require('./getAllNotes');
const updateNotes = require('./updateNotes');

const editNote = async (noteId, body) => {
  const notes = await getAllNotes();
  const idx = notes.findIndex(({ id }) => String(noteId) === String(id));
  if (idx === -1) {
    return null;
  }
  notes[idx] = { ...notes[idx], ...body };

  await updateNotes(notes);
  return notes[idx];
};

module.exports = editNote;
