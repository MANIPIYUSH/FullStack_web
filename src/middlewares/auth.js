const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  // Read the token from the req cookies
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Token is not valid");
    }
    const decodingObj = await jwt.verify(token, "piyush@123");
    const { _id } = decodingObj;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User Not Found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.send(400).send("ERROR: " + err.message);
  }
};

module.exports = {
  userAuth,
};
