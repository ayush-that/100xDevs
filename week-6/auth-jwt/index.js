const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "ayush123";

app.use(express.json());

const users = [];

// signup
app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // check if user already exists
  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username)
      res.json({
        message: "Error! User already exists.",
      });
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are signed in.",
  });
});

// signin
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
});

// me
app.get("/me", function (req, res) {});

app.listen();
