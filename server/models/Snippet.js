const mongoose = require("mongoose");
const User = require("./User");

const SnippetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: mongoose.Types.ObjectId, ref: "user", required: true },
  upvote: { type: Number, default: 0 },
  downvote: { type: Number, default: 0 },
  favourite: { type: Boolean, default: false },
  dates: {
    created: { type: Date, default: Date.now() },
    last_edit: { type: Date },
  },
  style: { type: String },
  language: {
    type: String,
    enum: [
      "javascript",
      "react",
      "graphql",
      "nodejs",
      "python",
      "vue",
      "angular",
      "scss",
    ],
  }, //enum
  tags: { type: Array }, //enum
});

const Snippet = mongoose.model("snippet", SnippetSchema);

module.exports = Snippet;
