const express = require('express');

const controllers = require('../services');

const router = express.Router();

router.get('/', controllers.getAll);

router.get('/:id', controllers.getById);

router.post('/', controllers.add);

router.patch('/:id', controllers.editById);

router.delete('/:id', controllers.removeById);

module.exports = router;
