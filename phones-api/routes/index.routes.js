const router = require("express").Router();
const phones = require("../../data/phones.json");

// Create a dictionary-like structure for phones
const phonesDictionary = phones.reduce((acc, phone) => {
  acc[phone.id] = phone;
  return acc;
}, {});

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  try {
    res.json(phones);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;
  try {
    const phone = phonesDictionary[id];
    if (!phone) {
      res.status(404).json({ error: "Phone not found" });
    } else {
      res.json(phone);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
