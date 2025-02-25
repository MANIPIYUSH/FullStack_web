const express = require('express');

const requestRouter = express.Router();


requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
const user = req.user

  console.log("sending a connection request");
  res.send("send connection request sent!!");


});


module.exports = requestRouter;