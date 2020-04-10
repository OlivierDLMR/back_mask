var express = require('express');
var router = express.Router();
var Pharmacie = require('../models/Pharmacies');

/* GET Pharmacies. */
router.get('/', function(req, res, next) {
    Pharmacie.find().exec((err, pharmacies) => {
        res.json(pharmacies)
    })
});

router.post('/', (req, res) => {
    const pharmacie = new Pharmacie({
        name: req.body.name,
        adresse: req.body.adresse,
        geometry: {
            type: 'Point',
            coordinates: [req.body.longitude, req.body.latitude]
        },
        masques: req.body.masques
    });
    pharmacie.save((err, newPharmacie) => {
        console.log(err);
        if (err) return res.json(err);
        res.json(newPharmacie);
    });
});


module.exports = router;