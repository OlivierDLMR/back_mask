var express = require('express');
var router = express.Router();
var Pharmacies = require('../models/Pharmacies');

router.get('/pharmacies', (req, res) => {
    Pharmacies.find().sort({ createdAt: -1 }).exec((err, pharmacie) => {
        res.json(pharmacie);
    });
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'I need a mask' });
});


router.post('/pharmacies', (req, res) => {
    const Pharmacies = new Pharmacies({
        name: req.body.name,
        geometry: {
            type: 'Point',
            coordinates: [
                req.body.longitude,
                req.body.latitude
            ]
        },
        address: req.body.address
    });

    Pharmacies.register(Pharmacies, (err, pharmacies) => {
        if (err) {
            console.log(err);
            return res.json(pharmacies);
        }

        res.redirect('/');
    });
});

module.exports = router;

