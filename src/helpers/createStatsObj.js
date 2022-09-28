const getNoteAmountOnCategory = require('./getNoteAmountOnCategory');

const createStatsObj = (categories, notes) => {
  let result = [];
  categories.forEach((category) => {
    const data = getNoteAmountOnCategory(category, notes);
    const categoryStat = {
      name: category,
      amount: { ...data },
    };

    result = [...result, categoryStat];
  });

  return result;
};

module.exports = createStatsObj;
