const operations = require('../helpers');

const getAll = async (req, res, next) => {
  try {
    const notes = await operations.getAllNotes();
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: notes,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
