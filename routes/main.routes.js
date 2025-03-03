const express = require('express');
const router = express.Router();
const main_controller = require('../controllers/main.controller');

// Manda a llamar los controllers
router.get('/', main_controller.get);
router.get('/main', main_controller.get);

router.get('/about', main_controller.get_about);

router.get('/questions', main_controller.get_questions);

module.exports = router;