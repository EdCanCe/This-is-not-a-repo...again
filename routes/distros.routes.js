const express = require('express');
const router = express.Router();
const distro_controller = require('../controllers/distro.controller');
const isAuth = require('../util/isAuth');
const canAddVote = require('../util/canAddVote');
const canModifyVote = require('../util/canModifyVote');


// Manda a llamar los controllers
router.get('/', distro_controller.get_distro);

router.get('/add', isAuth, canAddVote, distro_controller.get_distro_add);

router.post('/add', isAuth, canAddVote, distro_controller.post_distro_add);

router.get('/list', distro_controller.get_distro_list);

router.get('/modify', isAuth, canModifyVote, distro_controller.get_distro_modify);

router.post('/modify', isAuth, canModifyVote, distro_controller.post_distro_modify);

router.get('/:distro', distro_controller.get_distro_id);

module.exports = router;