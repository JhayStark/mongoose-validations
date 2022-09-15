const jwt = require("jsonwebtoken");

const authRequired = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(402).json({ error: "Please login in" });
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(402).json({ error: "Please login" });
  }

  const user = jwt.verify(
    token,
    "8189adcfd101a9ced58634b2e51a8346cd09b315451e609d9733baf6c711c584"
  );

  req.user = user;

  next();
};

module.exports = { authRequired };
