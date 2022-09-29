import operations from '../helpers';

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await operations.getNote(id);
    if (!result) {
      const error: { status?: number, message:string } = new Error(`Note with id ${id} not found`);
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

export default getById;
