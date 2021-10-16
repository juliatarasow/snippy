const express = require("express");
const controller = require('../controllers/snippetController');
const router = express.Router();
const passport = require('passport');

router.post('/new', controller.createSnippet)
router.get('/', controller.viewSnippets)
router.get('/language/:language', controller.viewSnippetsLanguage)
router.put('/update', controller.updateSnippet)
router.put('/upvote', controller.upvoteSnippet)
router.put('/downvote', controller.downvoteSnippet)
router.put('/favourite', controller.favouriteSnippet)
router.post('/author', controller.viewUserSnippets)



module.exports = router;