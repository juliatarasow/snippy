const bcrypt = require("bcrypt");
const User = require("../models/User");
const Post = require("../models/Post");
const jwtIssuer = require("../helpers/jwtIssuer");

exports.register = async (req, res) => {
  const userExists = await User.find({
    $or: [{ username: req.body.username }, { email: req.body.email }],
  });
  console.log(userExists, req.body.username, req.body.email);
  if (userExists.length < 1) {
    const hashed = await bcrypt.hash(req.body.password, 10);
    const profileDefault =
      "https://avatars.dicebear.com/api/gridy/" +
      req.body.firstname +
      req.body.lastname +
      ".svg";
    const newUser = await User.create({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashed,
      profile: profileDefault,
    });
    res.status(200).json({ message: "User created", user: newUser });
  } else if (userExists.length > 0) {
    var error = new Error();
    console.log(error);
    res.status(400).json({
      message: "Username or Email already in use",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (user === null) {
      return res.status(403).json({ message: "Invalid username" });
    }

    var checkPassword = await bcrypt.compare(req.body.password, user.password);
    if (checkPassword) {
      const token = jwtIssuer.generateToken(user);
      console.log(user);

      return res.status(200).json({
        message: "Success",
        token: token,
        user: user,
      });
    } else {
      return res.status(400).json({ message: "Invalid password" });
    }
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params);
    if (user == null) {
      return res.status(403).json({ message: "user not found" });
    }
    return res.status(200).json({
      message: "Success",
      user: user,
    });
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};

exports.changePassword = async (req, res) => {
  const checkUsername = await User.findOne({ username: req.body.username });
  try {
    if (checkUsername == null) {
      return res.status(404).json({ message: "not found" });
    } else {
      const newPassword = await bcrypt.hash(req.body.password, 10);
      console.log(newPassword);
      const newData = await User.findOneAndUpdate(
        { username: req.body.username },
        { password: newPassword, reset_password: false }
      );
      res.status(200).json({ message: "updated", user: newData });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.updateUsername = async (req, res) => {
  const { email, username, activities} = req.body;
  const { _id } = req.params;
  const filter = { _id: _id };

  const updatedUser = await User.findOneAndUpdate(filter, req.body, {
    new: true,
  }).catch((error) => {
    return res.status(500).send(error);
  });

  return res.status(200).json({
    message: "Updated user",
    data: updatedUser,
  });
};

exports.addSavedPost = async (req, res) => {
  console.log(req.body);
  const checkUser = await User.findOne({ username: req.body.username });
  try {
    if (checkUser == null) {
      return res.status(404).json({ message: "not found" });
    } else {
      const postToBeAdded = await Post.findOne({ _id: req.params });
      postToBeAdded.isSaved = postToBeAdded.isSaved + 1;
      postToBeAdded.save();
      const postReview = {
        user: postToBeAdded.user,
        snippet: postToBeAdded.snippet,
        _id: postToBeAdded._id,
        comments: postToBeAdded.comments.length,
      };
      checkUser.savedSnippets.push(postReview);
      checkUser.save();
      const userSavedData = checkUser.savedSnippets;
      res
        .status(200)
        .json({ message: "Post Saved", userSavedData: userSavedData });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
