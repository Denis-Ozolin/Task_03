import operations from '.';

const removeNote = async (noteId: string | number) => {
  const notes = await operations.getAllNotes();
  const idx = notes.findIndex(({ id }) => String(id) === String(noteId));
  if (idx === -1) {
    return null;
  }
  const updatedNotes = notes.filter((_, index) => index !== idx);
  await operations.updateNotes(updatedNotes);
  return notes[idx];
};

export default removeNote;
