// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json(err);
};

module.exports = errorHandler;
