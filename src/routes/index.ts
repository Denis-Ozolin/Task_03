import express from 'express';

import controllers from '../services';

const router = express.Router();

router.get('/', controllers.getAll);

router.get('/stats', controllers.getStats);

router.get('/:id', controllers.getById);

router.post('/', controllers.add);

router.patch('/:id', controllers.editById);

router.delete('/:id', controllers.removeById);

export default router;
