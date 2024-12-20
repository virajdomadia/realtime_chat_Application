const bcrypt = require("bcrypt");
const { User, validateLogin } = require("../models/userModel");

const loginController = async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ message: "Invalid email" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send({ message: "Invalid password" });
    }
    if (!user.verified) {
      return res.status(400).send({ message: "Please verify your email" });
    }

    const token = user.generateAuthToken();
    res
      .status(200)
      .cookie("authToken", token, {
        httpOnly: false,
        sameSite: "none",
        secure: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      })
      .send({ message: "Logged in successfully", status: 200 });
    return;
  } catch (error) {
    console.error("Error in loginController: ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = loginController;
