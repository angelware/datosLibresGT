var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('colaboradores', {title: 'Datos Libres', message: 'Hello there!'  });
});

module.exports = router;
