import operations from '.';

const getNotesStats = async () => {
  const notes = await operations.getAllNotes();
  const categories = await operations.getCategoryList(notes);
  const result = await operations.createStatsObj(categories, notes);

  if (!result) {
    return null;
  }
  return result;
};

export default getNotesStats;
