const express = require('express');
const router = express.Router();
const error_controller = require('../controllers/error.controller');

// Manda a llamar los controllers
router.get("*", error_controller.get_error);


module.exports = router;