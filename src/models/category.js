const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
    category : {
        type: String,
        required: [true],
    },
    status: {
        type: Boolean,
        required: [true],

    },
    desc : {
        type : String
    },
    other : {
        type : String
    }


},
{ timestamps: true }
);


const Categories = mongoose.model('Categories', schema);

module.exports = {
    Categories
}