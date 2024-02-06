const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  // Note: applicable to every routes here 'admin', rather just routes declared it to. (ei: 'ValidateStuff')
  if (req.query.isAdmin) {
    next();
  }
  res.send("Sorry Not an Admin");
});

router.get("/topsecret", (req, res) => {
  res.send("THIS is TOP SECRET");
});

router.get("/deleteeverything", (req, res) => {
  res.send("OK DELETED ALL");
});

module.exports = router;
