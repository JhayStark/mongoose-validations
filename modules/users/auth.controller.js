const Users = require("./user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const token = jwt.sign(
    { id: user._id, email: user.email },
    "8189adcfd101a9ced58634b2e51a8346cd09b315451e609d9733baf6c711c584",
    {
      expiresIn: "1h",
    }
  );

  return {
    token,
    user,
  };
};

const register = async (req, res) => {
  const { email, password } = req.body;

  //does email already exists
  const emailExists = await Users.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ error: "Email already in use." });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await Users.create({ ...req.body, password: hashedPassword });

  const token = generateToken(user);

  res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let user = await Users.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  const token = generateToken(user);

  res.status(200).json({ token });
};

module.exports = { register, login };
