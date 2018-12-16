const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const controllers = require("./controllers");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(controllers);

/**
 * Uncomment these lines after setting up react server
 * 
 * app.use(express.static(path.join(__dirname,'..', 'client', 'build')));
 * app.get('/', (req, res) => {
 *  res.sendFile(path.join(__dirname,'..', 'client', 'build', 'index.html'));
 * });
 * 
*/ 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;  
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
