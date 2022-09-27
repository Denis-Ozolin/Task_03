const operations = require('../helpers');

const removeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await operations.removeNote(id);
    if (!result) {
      const error = new Error(`Note with id ${id} not found`);
      error.status = 404;
      throw error;
    }
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
