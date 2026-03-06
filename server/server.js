const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportConfig = require("./passport-config");
const mongoose = require("mongoose");

const snippetRoutes = require("./routes/snippet");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
passportConfig(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((error) => console.log("Database is not connected!", error));

app.use("/user", userRoutes);
app.use("/snippet", snippetRoutes);
app.use("/posts", postRoutes);

app.all("*", (req, res) => {
  res.status(500);
  res.send("Invalid path");
});

app.listen(PORT, () => {
  console.log("Connected on port %s", PORT);
});
