var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
  {id:1, title: "titile1"},
  {id:2, title: "titile2"},
  {id:3, title: "titile3"}
  ])
});

module.exports = router;
