const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// load .env only on development
if (!process.env.TRAVIS && !process.env.ENV !== 'production') {
  require('dotenv').config();
}

const controllers = require("./controllers");
const errorHandler = require("./errors/error_handler")
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
 * app.use(favicon(path.join(__dirname,'..', 'client', 'build', 'favicon.ico')))
 * app.get('*', (req, res) => {
 *  res.sendFile(path.join(__dirname,'..', 'client', 'build', 'index.html'));
 * });
 * 
*/ 

// error handler
app.use(errorHandler);

module.exports = app;
