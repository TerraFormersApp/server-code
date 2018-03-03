const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const queries = require("./queries");
app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response, next) => {
  response.status(201).json("You found the server").catch(next);
});

app.get("/planets", (request, response, next) => {
  queries.listPlanets().then(planets => {
    response.status(201).json({planets});
  }).catch(next);
});

app.get("/planets/:id", (request, response, next) => {
  queries.readPlanet(request.params.id).then(planet => {
    planet
      ? response.status(201).json({planet})
      : response.sendStatus(404);
  }).catch(next);
});

app.post("/planets", (request, response, next) => {
  queries.createPlanet(request.body).then(() => {
    response.status(201).json("Your planet was added!");
  }).catch(next);
});

app.delete("/planets/:id", (request, response, next) => {
  queries.deletePlanet(request.params.id).then(() => {
    response.status(201).json("Your planet was removed!");
  }).catch(next);
});

app.put("/planets/:id", (request, response, next) => {

  queries.updatePlanet(request.params.id,request.body)
    .then(() => console.log(request.body))
    .then(() => {
      response.status(201).json("Your planet was updated!");
    }).catch(next);
});

// catch 404 and forward to error handler
app.use((request, response, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, request, response, next) => {
  response.status(err.status || 500);
  response.json({
    message: err.message,
    error: request.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports= app;
