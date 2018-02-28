const express = require("express");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response, next) => {
  response.status(201).json("You found the server").catch(next);
});

// catch 404 and forward to error handler
app.use(function(request, response, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
  
// error handler
app.use(function(err, request, response, next) {
  response.status(err.status || 500);
  response.json({
    message: err.message,
    error: request.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports= app;