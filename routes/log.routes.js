const express = require('express');
const router = express.Router();
const log_controller = require('../controllers/log.controller');


// Manda a llamar los controllers
router.get('/in', log_controller.get_in);

router.post('/in', log_controller.post_in);

router.get('/out', log_controller.get_out);

router.get('/new', log_controller.get_new);

router.post('/new', log_controller.post_new);

module.exports = router;