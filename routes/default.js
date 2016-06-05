var express = require('express');
var router = express.Router();

router.route('/')
.get(function (request,response) {
 // response.json(Object.keys(blocks));
  response.send('hello world');
})


module.exports = router;
