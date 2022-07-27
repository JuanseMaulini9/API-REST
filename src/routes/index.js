const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => {
  const data = {
    "name": "Juanse",
    "usename": "@juansemaulini9"
  }
  res.json(data);
});

module.exports = router
