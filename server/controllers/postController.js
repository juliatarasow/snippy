const Post = require("../models/Post");

exports.viewPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate({
        path: "user",
        select: "username profile",
      })
      .populate({ path: "snippet" })
      .sort({dates: -1});
    res.status(200).json({ message: "Latest posts", posts: posts });
  } catch (error) {}
};

exports.viewSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params)
      .populate({ path: "user", select: "username profile" })
      .populate({ path: "snippet" });
    if (post == null) {
      return res.status(404).json({ message: "not found" });
    }
    res.status(200).json({ message: "Saved post found", post: post });
  } catch (error) {
    res.status(403).json({ message: "error occured", error: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create({
      user: req.body.user,
      snippet: req.body.snippet,
    });
    res.status(200).json({ message: "Post added", newPost: newPost });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

exports.addComment = async (req, res) => {
  console.log(req.body);
  try {
    const newComment = await Post.findOne({ _id: req.body._id });
    if (newComment._id === null || newComment._id === undefined) {
      res.status(400).json({ message: "Post not found" });
    }
    newComment.comments.push({
      username: req.body.username,
      comment: req.body.comment,
      profile: req.body.profile,
    });
    newComment.save();
    let updateComment = newComment.comments[newComment.comments.length - 1];
    res
      .status(200)
      .json({ message: "Comment added", newComment: updateComment });
    console.log(updateComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.removeComment = async (req, res) => {
  try {
    const findComment = await Post.findOne({ _id: req.body._id });
    if (findComment._id === null || findComment._id === undefined) {
      res.status(400).json({ message: "Post not found" });
    }
    await findComment.deleteOne({ _id: req.body._id });
    res.status(200).json({ message: "comment removed" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
