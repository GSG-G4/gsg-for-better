const mongoose = require('mongoose');

const { mongoURI } = require('./config');

// create DB connection
const dbConnection = () => mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
);

module.exports = dbConnection;
