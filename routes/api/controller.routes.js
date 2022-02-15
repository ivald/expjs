const controller = require('./controller')
const express = require('express');
const router = express.Router();

router.get('/data', controller.getData);

module.exports = router;
