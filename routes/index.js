var express = require("express");
var router = express.Router();

/* GET index page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("./page/Contact");
});

router.get("/home", function (req, res, next) {
  res.render("./page/Home", { title: "Express" });
});

module.exports = router;
