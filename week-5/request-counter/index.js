// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require("express");
const app = express();
const PORT = 3000;

let totalRequests = 0;

function requestCounter(req, res, next) {
  totalRequests = totalRequests + 1;
  next();
}

app.use(requestCounter);

app.get("/requestcount", function (req, res) {
  res.json({
    requestCount: totalRequests,
  });
});

app.get("/", function (req, res) {
  res.send("This server counts requests.");
});

app.listen(PORT);
