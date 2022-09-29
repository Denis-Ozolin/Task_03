import operations from '.';
import { INote } from '../repositories/types';

const createStatsObj = async (categories: string[], notes: INote[]) => {
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
