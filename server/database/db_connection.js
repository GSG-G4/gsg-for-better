const mongoose = require('mongoose');

// load .env only on development
if (!process.env.TRAVIS && !process.env.ENV !== 'production') {
  require('dotenv').config()
}

const dbConnection = () => {
  let { MONGOURI: mongoURI } = process.env;

  if (process.env.NODE_ENV === 'test') {
    // change MONGOURI to testDBurl
    mongoURI = process.env.MONGOURI_TEST; 
  }
  // create DB connection
  return mongoose.connect(
    mongoURI,
    { useNewUrlParser: true }
  );
}

module.exports = dbConnection;
