var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('dupa')
  res.json({message:'Serwer i frontend juz sie lubią :)'})
});

module.exports = router;
