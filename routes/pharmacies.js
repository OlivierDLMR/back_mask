var express = require('express');
var router = express.Router();
// var Pharmacies = require('../models/Pharmacies');


router.get('/', (req, res) => {
    Pharmacies.find().populate('user').exec((err, pharmacies) => {
        res.render('pharmacies/show', { title: 'Les pharmacies', Pharmacies: pharmacies });
    });
});

module.exports = router;