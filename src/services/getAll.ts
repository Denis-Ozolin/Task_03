import operations from '../helpers';

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

export default getAll;
