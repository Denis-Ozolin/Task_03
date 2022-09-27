const operations = require('./');

const editNote = async (noteId, body) => {
  const notes = await operations.getAllNotes();
  const idx = notes.findIndex(({ id }) => String(noteId) === String(id));
  if (idx === -1) {
    return null;
  }
  notes[idx] = { id: noteId, ...body };
  await operations.updateNotes(notes);
  return notes[idx];
};

module.exports = editNote;
