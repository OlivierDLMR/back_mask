var express = require('express');
var router = express.Router();
var Pharmacie = require('../models/Pharmacies');


router.get('/pharmacies', (req, res) => {
    Pharmacie.find().sort({ createdAt: -1 }).exec((err, pharmacies) => {
        res.json(pharmacies);
    });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/pharmacies', (req, res) => {

} );




router.post('/pharmacie', (req, res) => {
    const pharmacies = new Pharmacies({
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
    Pharmacies.register(Pharmacie, (err, pharmacie) => {
        if (err) {
            console.log(err);
            return res.json(pharmacie);
        }

        res.redirect('/');
    });
});


