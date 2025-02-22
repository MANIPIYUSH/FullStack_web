const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Token is not valid");
    }
    const decodingObj = await jwt.verify(token, "Piyush@123");
    const { _id } = decodingObj;
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(400).send("ERROR: " + err.message);  
  }
};


module.exports = {
  userAuth,
};
