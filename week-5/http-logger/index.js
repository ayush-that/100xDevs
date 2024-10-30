// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require("express");
const app = express();

function consoleLogger(req, res, next) {
  const httpMethod = req.method;
  const url = req.url;
  const timestamp = new Date();
  console.log(
    `HTTP Method: ${httpMethod}\nURL: ${url}\nTimestamp: ${timestamp}`
  );
  next();
}

app.use(consoleLogger);

app.get("/", function (req, res) {
  res.send(
    "This server logs  logs each incoming request’s HTTP method, URL, and timestamp to the console."
  );
});

app.listen(3000);
