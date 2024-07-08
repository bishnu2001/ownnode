const errorHandler = (err, req, res, next) => {
  console.error(err?.name);
  const message = err?.message || "Something went wrong!";
  const status = err?.status || 500;
  res.status(status).json({ success: false, error: { message } });
};

module.exports = {
  errorHandler,
};
