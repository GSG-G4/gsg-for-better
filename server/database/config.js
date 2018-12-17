let { MONGO_URI: mongoURI } = process.env;

if (process.env.NODE_ENV === 'test') {
  // change MONGOURI to testDBurl
  mongoURI = process.env.MONGOURI_TEST;
}

module.exports = { mongoURI };
