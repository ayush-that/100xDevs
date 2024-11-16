const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "ayush123";

app.use(express.json());
const users = [];

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
}

function authCheck(req, res, next) {
  // we have to verify the user in this
  const username = req.body.username;
  const password = req.body.password;

  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      next();
    } else {
      res.json({
        message: "You are not authorized to view this content.",
      });
    }
  }
}

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

app.use(authCheck);

// signin
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }

  if (!foundUser) {
    res.json({
      message: "User does not exist.",
    });
  } else {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    res.json({ token: token });
  }
});

app.use(authCheck);

// me
app.get("/me", function (req, res) {
  // take the token from the user and decode
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData.username) {
    // check if the user exists
    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == decodedData.username) {
        foundUser = users[i];
      }
    }

    // return data to user
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  }
});

app.listen(3000);
