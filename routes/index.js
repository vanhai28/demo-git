var express = require("express");
var router = express.Router();

/* GET index page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/* GET home page. */
<<<<<<< HEAD
=======

>>>>>>> 871ee585618e3304b847b4d22ca9f8e49533f3e6
router.get("/home", function (req, res, next) {
  res.render("./page/Home", { title: "Express" });
});

module.exports = router;

//comment 01
//comment 02
// comment 03
// comment 04
