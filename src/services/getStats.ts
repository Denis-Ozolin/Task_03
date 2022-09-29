import operations from '../helpers';

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

export default getStats;
