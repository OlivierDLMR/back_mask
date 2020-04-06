var express = require('express');
var router = express.Router();


var Pharmacie = require('../models/Pharmacies');
        router.get('/pharmacies', (req, res)
            => { Pharmacie.find().populate('user').sort({ createdAt: -1 }).exec((err, pharmacies)
            => { res.json(pharmacies); }); });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
