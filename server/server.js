const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportConfig = require("./passport-config");
const mongoose = require("mongoose");

const snippetRoutes = require("./routes/snippet");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

const { auth } = require("express-openid-connect");
const { requiresAuth } = require("express-openid-connect");

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

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:4000",
  clientID: "LGxOPLcDGEXsCb78bu57y2eZkHgLpJft",
  issuerBaseURL: "https://dev-fk426xno.eu.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
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
