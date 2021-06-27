const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
    brand : {
        type: String,
        required: [true],
    },
    status: {
        type: Boolean,
        required: [true],

    },
    desc : {
        type : String,
    },
    other : {
        type : String
    }


},
{ timestamps: true }
);


const Brands = mongoose.model('Brands', schema);

module.exports = {
    Brands
}