import fs from 'fs/promises';
import notesPath from '../repositories';
import { INote } from '../repositories/types';

const updateNotes = async (notes: INote[]) => {
  await fs.writeFile(notesPath, JSON.stringify(notes));
};

export default updateNotes;
