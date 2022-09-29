import { baseCategories } from '../repositories/categories';
import { INoteContent } from 'src/repositories/types';

const checkData = (obj: INoteContent) => {
  let errorMsg = ''
  if (obj.category && !obj.category || !baseCategories.includes(obj.category)) {
    errorMsg = "Wrong category"
    return errorMsg;
  }
  if (obj.active && (typeof obj.active) !== (typeof true)) {
    errorMsg = "Incorrect archiving"
    return errorMsg;
  }
  if (obj.content === "") {
    errorMsg = "Сontent is empty"
    return errorMsg;
  }
  return null;
}

export default checkData;