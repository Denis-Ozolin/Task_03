import operations from '../helpers';

const add = async (req, res, next) => {
  try {
    const result = await operations.addNote(req.body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default add;
