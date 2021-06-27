const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema(
  {
    productName: {
      type: String,
      required: [true],
    },
    brand: {
      type: String,
      required: [true],

    },

    rate: {
      type: Number,
      required: [true],

    },
    batchNo : {
        type : String,
        required: [true],

    },
    categories : {
        type : String,
        required: [true],

    },
    expiry : {
        type : Date,
        required: [true],

    },
    mrp : {
        type : Number,
        required: [true],

    },
    quantity : {
        type : Number,
        required: [true],

    },
    packing : {
        type : String,
        required: [true],

    },
    status : {
      type : Boolean,
    }
    
  },
  { timestamps: true }
);

const Medicines = mongoose.model("Medicines", schema);

module.exports = {
  Medicines,
};
