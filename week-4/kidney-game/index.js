// Learn by doing, lets create an in memory hospital
// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney

const express = require("express");
const app = express();
app.use(express.json());

const users = [
  {
    name: "John",
    kidneys: [{ healthy: false }],
  },
];

// check how many kidneys and their health status
app.get("/", function (req, res) {
  const userKidneys = users[0].kidneys;
  const noOfKidneys = userKidneys.length;

  const healthyKidneys = userKidneys.filter((kidney) => kidney.healthy).length;
  const unhealthyKidneys = noOfKidneys - healthyKidneys;

  res.json({
    noOfKidneys,
    healthyKidneys,
    unhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

// removes unhealthy kidney
app.delete("/", function (req, res) {
  if (isThereAtLeastOneUnhealthyKidney()) {
    let healthyKidneyCount = 0;
    let newKidneys = [];

    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        healthyKidneyCount = healthyKidneyCount + 1;
      }
    }

    for (let i = 0; i < healthyKidneyCount; i++) {
      newKidneys.push({ healthy: true });
    }

    users[0].kidneys = newKidneys;
    res.json({
      msg: "Done!",
    });
  } else {
    res.status(411).json({
      msg: "You have no unhealthy kidneys.",
    });
  }
});

function isThereAtLeastOneUnhealthyKidney() {
  let atLeastOneBadKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atLeastOneBadKidney = true;
    }
  }
  return atLeastOneBadKidney;
}

app.listen(3000);
