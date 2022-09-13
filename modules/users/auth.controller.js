const Users = require("./user.model");

const register = async (req, res) => {
  const { email, password } = req.body;

  //does email already exists
  const emailExists = await Users.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ error: "Email already in use." });
  }

  const user = await Users.create({ ...req.body });
  res.status(201).json({ user });
};

module.exports = { register };
