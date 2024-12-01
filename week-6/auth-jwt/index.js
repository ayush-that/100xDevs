const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "ayush123";

app.use(express.json());
const users = [];

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      message: "You are not authorized.",
    });
  }
}

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

function logger(req, res, next) {
  console.log(`${req.method} request came.`);
  next();
}

// signup
app.post("/signup", logger, function (req, res) {
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
app.post("/signin", logger, function (req, res) {
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

// me
app.get("/me", logger, auth, function (req, res) {
  const currentUser = req.username;
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == currentUser) {
      foundUser = users[i];
    }

    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  }
});

app.listen(3000);
