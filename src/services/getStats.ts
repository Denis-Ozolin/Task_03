import operations from '../helpers';

const getStats = async (req, res, next) => {
  try {
    const result = await operations.getNotesStats();
      if (!result || !result.length) {
      const error: { status?: number, message:string } = new Error('List of notes is empty');
      error.status = 404;
      throw error;
    }
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
