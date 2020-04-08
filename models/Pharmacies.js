const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PharmaciesSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
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
    mask: { type: Number, required: false },
});
module.exports = mongoose.model('Pharmacies', PharmaciesSchema);