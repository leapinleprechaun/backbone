var express = require('express');
var router = express.Router();

router.route('/') //this already runs off /user from where it was mounted
.get(function (request,response) {
 // response.json(Object.keys(blocks));
  response.send('hello user');
})


module.exports = router;
