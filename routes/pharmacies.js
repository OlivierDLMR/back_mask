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
        masque: req.body.masque
    });
    pharmacie.save((err, newPharmacie) => {
        if (err) return res.json(err);
        res.json(newPharmacie);
    });
});


module.exports = router;