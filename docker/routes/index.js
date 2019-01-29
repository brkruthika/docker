var express = require('express');
var router = express.Router();
let User = require('../model/userSchema');

/* GET home page. */

router.get('/', function (req, res, next) {
  res.sendFile(__dirname + "/user.html");
});

/**
 * API for getting db contents
 */
router.get('/getlist', function (req, res) {
  User.find({}, function (err, data) {
    if (err) {
      res.json({ data: 'success', success: true });
    } else {
      User.count('firstName', (err, count1) => {

        if (!err) {
          var data1 = {
            year: [],
            price: []
          }
          for (var i = 0; i < count1; i++) {
            data1.price.push(data[i].lastName);
            data1.year.push(data[i].firstName);
          }
          res.send(data1);
        }
      });
    }
  });
});

module.exports = router;