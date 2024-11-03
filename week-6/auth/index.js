const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const JWT_SECRET = "ayushandashu";

app.use(express.json());
const users = [];

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are signed in.",
  });
  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find(function (input) {
    return input.username == username && input.password == password;
  });

  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
  console.log(users);
});

app.get("/me", function (req, res) {
  const token = req.headers.token;
  const decodedInfo = jwt.verify(token, JWT_SECRET);
  const username = decodedInfo.username;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) foundUser = users[i];
  }

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "Token Invalid",
    });
  }
});

app.listen(3000);
