const express = require("express");
const controller = require('../controllers/userController');
const router = express.Router();

router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/profile/:_id', controller.getUser)
router.put('/savepost/:_id', controller.addSavedPost)
router.put('/profile/edit/:_id', controller.updateUsername)
router.put('/profile/password', controller.changePassword)
module.exports = router;
