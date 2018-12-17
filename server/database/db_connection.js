const mongoose = require('mongoose');

const { mongoURI } = require('./config');

const dbConnection = () => {

  // create DB connection
  return mongoose.connect(
    mongoURI,
    { 
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  );
}

module.exports = dbConnection;
