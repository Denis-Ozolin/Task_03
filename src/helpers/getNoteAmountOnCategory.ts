import { INote } from '../repositories/types';

const getNoteAmountOnCategory = (category: string, notes: INote[]) => {
  const categoryNotes = notes.filter((note) => note.category === category);
  const activeNotes = categoryNotes.filter((note) => note.active);
  const archiveNotes = categoryNotes.filter((note) => !note.active);

  return {
    active: activeNotes.length,
    archive: archiveNotes.length,
  };
};

export default getNoteAmountOnCategory;
