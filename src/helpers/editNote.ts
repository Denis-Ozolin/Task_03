import operations from ".";

const editNote = async (noteId, body) => {
  const notes = await operations.getAllNotes();
  const idx = notes.findIndex(({ id }) => String(noteId) === String(id));
  if (idx === -1) {
    return null;
  }
  notes[idx] = { ...notes[idx], ...body };

  await operations.updateNotes(notes);
  return notes[idx];
};

export default editNote;
