import Joi from 'joi';

import operations from '../helpers';

const noteSchema = Joi.object({
  category: Joi.string().required(),
  content: Joi.string().required()
})

const add = async (req, res, next) => { 
  try {
    const { error } = noteSchema.validate(req.body);
    if (error) {
      const error: { status?: number, message: string } = new Error("Incorrect data");
      error.status = 404;
      throw error;
    }
    const incorrectData = operations.checkData(req.body);
    if (incorrectData) {
      const error: { status?: number, message: string } = new Error(incorrectData);
      error.status = 404;
      throw error;
    }
    const result = await operations.addNote(req.body);
    if (!result) {
      const error: { status?: number, message: string } = new Error('Incorrect data');
      error.status = 404;
      throw error;
    }
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
