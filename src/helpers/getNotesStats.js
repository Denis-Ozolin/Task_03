const getAllNotes = require('./getAllNotes');
const getCategoryList = require('./getCategoryList');
const createStatsObj = require('./createStatsObj');

const getNotesStats = async () => {
  const notes = await getAllNotes();
  const categories = await getCategoryList(notes);
  const result = await createStatsObj(categories, notes);

  console.log(result);

  if (!result) {
    return null;
  }
  return result;
};

module.exports = getNotesStats;
