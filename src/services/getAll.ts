import operations from '../helpers';

const getAll = async (req, res, next) => {
  try {
    const result = await operations.getAllNotes();
    if (!result || !result.length) {
      const error: { status?: number, message:string } = new Error('List of notes is empty');
      error.status = 404;
      throw error;
    }
    
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: result,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default getAll;
