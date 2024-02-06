const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("View All Dogs");
});

router.post("/", (req, res) => {
  res.send("Creating Dogs");
});

router.get("/:id", (req, res) => {
  res.send("Viewing Specific Dogs");
});

router.get("/:id/edit", (req, res) => {
  res.send("Editing Specific Dogs");
});

module.exports = router;
