import addNote from './addNote';
import editNote from './editNote';
import getAllNotes from './getAllNotes';
import getCurrentDate from './getCurrentDate';
import getNote from './getNote';
import removeNote from './removeNote';
import updateNotes from './updateNotes';
import getCategoryList from './getCategoryList';
import createStatsObj from './createStatsObj';
import getNoteAmountOnCategory from './getNoteAmountOnCategory';
import getNotesStats from './getNotesStats';
import checkData from './checkData';

const operations = {
  addNote,
  editNote,
  getAllNotes,
  getCurrentDate,
  getNote,
  removeNote,
  updateNotes,
  getCategoryList,
  createStatsObj,
  getNoteAmountOnCategory,
  getNotesStats,
  checkData
}

export default operations;