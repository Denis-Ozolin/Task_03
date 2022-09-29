import { v4 } from 'uuid';
import operations from '.';
import { INoteContent } from '../repositories/types';

const addNote = async (body: INoteContent) => {
  if (!body.category || !body.content) {
    return null;
  }
  const notes = await operations.getAllNotes();
  const newNote = {
    id: v4(),
    create: await operations.getCurrentDate(),
    active: true,
    ...body,
  };
  const updatedNotes = [...notes, newNote];
  await operations.updateNotes(updatedNotes);
  return newNote;
};

export default addNote;
