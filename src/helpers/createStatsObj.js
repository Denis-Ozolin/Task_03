const getNoteAmountOnCategory = require('./getNoteAmountOnCategory');

const createStatsObj = async (categories, notes) => {
  let result = [];
  await categories.forEach((category) => {
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
