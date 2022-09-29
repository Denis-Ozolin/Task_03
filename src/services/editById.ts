import Joi from 'joi';

import operations from '../helpers';

const noteSchema = Joi.object({
  category: Joi.string(),
  content: Joi.string(),
  active: Joi.boolean()
})

const editById = async (req, res, next) => {
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
    const { id } = req.params;
    const result = await operations.editNote(id, req.body);
    if (!result) {
      const error: { status?: number, message: string } = new Error(`Note with id ${id} not found`);
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

export default editById;
