import operations from '.';

const createStatsObj = async (categories, notes) => {
  let result = [];
  await categories.forEach((category) => {
    const data = operations.getNoteAmountOnCategory(category, notes);
    const categoryStat = {
      name: category,
      amount: { ...data },
    };

    result = [...result, categoryStat];
  });

  return result;
};

export default createStatsObj;
