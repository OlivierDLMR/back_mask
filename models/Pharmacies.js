const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PharmaciesSchema = new Schema({
    name: { type: String, required: true },
    adresse: { type: String, required: true },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    masque: { type: Number, required: false },
});
module.exports = mongoose.model('Pharmacies', PharmaciesSchema);