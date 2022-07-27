const { Router } = require("express");
const _ = require("underscore");
const router = Router();
const muguiwaras = require("../muguiwara.json");

router.get("/", (req, res) => {
  res.json(muguiwaras);
});

router.post("/", (req, res) => {
  const { name, rol, reward } = req.body;

  if (name && rol && reward) {
    const id = muguiwaras.length + 1;
    const newMugui = { id, ...req.body };
    muguiwaras.push(newMugui);
    res.json(muguiwaras);
  } else {
    res.json({ error: "There was an error" });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, rol, reward } = req.body;
  if (name && rol && reward) {
    _.each(muguiwaras, (muguiwara, i) => {
      if (muguiwara.id == id) {
        muguiwara.name = name;
        muguiwara.rol = rol;
        muguiwara.reward = reward;
      }
    });
    res.json(muguiwaras)
  }else {
    res.status(500).json({error: "There wars an error"})
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(muguiwaras, (muguiwara, i) => {
    if (muguiwara.id == id) {
      muguiwaras.splice(i, 1);
    }
  });
  res.send(muguiwaras);
});

module.exports = router;
