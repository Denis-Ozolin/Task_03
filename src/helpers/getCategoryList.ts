const getCategoryList = (list) => {
  const categoryList = [];
  list.forEach((item) => {
    if (categoryList.includes(item.category)) {
      return;
    } else categoryList.push(item.category);
  });

  return categoryList;
};

export default getCategoryList;
