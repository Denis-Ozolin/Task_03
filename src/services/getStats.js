const operations = require('../helpers');

const getStats = async (req, res, next) => {
  try {
    const result = await operations.getNotesStats();
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getStats;
