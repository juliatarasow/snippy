const mongoose = require("mongoose");
const moment = require('moment')

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: String },
  dates: {
    registered: { type: Date, default: Date.now() },
    last_active: { type: Date },
  },
  savedSnippets: { type: Array, default: [] },
  activities: {
    type: Array,
    default: [`joined the community at ${moment(Date.now()).format('DD/MM/YYYY')}`],
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
