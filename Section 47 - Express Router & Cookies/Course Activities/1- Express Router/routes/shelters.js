const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("View All Shelter");
});

router.post("/", (req, res) => {
  res.send("Creating Shelter");
});

router.get("/:id", (req, res) => {
  res.send("Viewing Specific Shelter");
});

router.get("/:id/edit", (req, res) => {
  res.send("Editing Specific Shelter");
});

module.exports = router;
