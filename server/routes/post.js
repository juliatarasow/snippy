const express = require("express");
const controller = require("../controllers/postController");
const router = express.Router();


router.post("/new", controller.createPost);
router.get("/", controller.viewPosts);
router.put('/addcomment', controller.addComment)
router.get('/saved/:_id', controller.viewSinglePost)
module.exports = router;
