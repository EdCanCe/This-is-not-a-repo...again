const express = require('express');
const router = express.Router();
const distro_controller = require('../controllers/distro.controller');

// Manda a llamar los controllers
router.get('/', distro_controller.get_distro);

router.get('/add', distro_controller.get_distro_add);

router.post('/add', distro_controller.post_distro_add);

router.get('/list', distro_controller.get_distro_list);

router.get('/modify', distro_controller.get_distro_modify);

router.post('/modify', distro_controller.post_distro_modify);

router.get('/:distro', distro_controller.get_distro_id)

module.exports = router;