const express = require('express');
const router = express.Router();
const distro_controller = require('../controllers/distro.controller');
const isAuth = require('../util/isAuth');


// Manda a llamar los controllers
router.get('/', distro_controller.get_distro);

router.get('/add', isAuth, distro_controller.get_distro_add);

router.post('/add', isAuth, distro_controller.post_distro_add);

router.get('/list', distro_controller.get_distro_list);

router.get('/modify', isAuth, distro_controller.get_distro_modify);

router.post('/modify', isAuth, distro_controller.post_distro_modify);

router.get('/:distro', distro_controller.get_distro_id);

module.exports = router;