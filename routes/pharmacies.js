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
        address: req.body.address,
        geometry: {
            type: 'Point',
            coordinates: [req.body.longitude, req.body.latitude]
        },
        mask: req.body.mask
    });
    pharmacie.save((err, newPharmacie) => {
        if (err) return res.json(err);
        res.json(newPharmacie);
    });
});


module.exports = router;