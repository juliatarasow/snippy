const mongoose = require("mongoose");
const User = require("./User");
const Snippet = require("./Snippet");

const CommentSchema = new mongoose.Schema({
  username: { type: String },
  comment: { type: String },
  profile: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const PostSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "user", required: true },
  snippet: { type: mongoose.Types.ObjectId, ref: "snippet", required: true },
  score: { type: Number, default: 0 },
  isSaved: { type: Number, default: 0 },
  comments: { type: [CommentSchema] },
  dates: {
    created: { type: Date, default: Date.now() },
    last_edit: { type: Date },
  },
});
PostSchema.pre("save", function () {
  // In 'save' middleware, `this` is the document being saved.
  console.log("Save", this.user);
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
