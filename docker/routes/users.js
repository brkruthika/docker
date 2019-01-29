var express = require('express');
var router = express.Router();
let User = require('../model/userSchema');

/**
 * API for delete
 */
router.delete("/deletename", (req, res) => {
  console.log('in delete');
  User.findOneAndRemove({ firstName: req.body.firstName }, function (err) {
    if (!err) {
      res.json({ success: true, data: "success" });
    } else {
      res.json(err);
    }
  });
});
/**
 * API for update db
 */
router.put("/update", (req, res) => {
  console.log('in update', req.body);
  User.update({ firstName: req.body.firstName }, { firstName: req.body.changef, lastName: req.body.changel }, { new: true }, function (err, doc) {
    if (err) return res.send(500, { error: err });
    res.json({ success: true, data: "success" });
  });
});

/**
 * API for new entry in db
 */
router.post('/testAdd', function (req, res) {
  let user1 = new User({ firstName: req.body.firstName, lastName: req.body.lastName });
  user1.save(function (err) {
    if (!err) {
      res.send('data added');
    } else {
      console.log("error in testAdd API", err);
      res.json(err);
    }
  });
});

module.exports = router;
