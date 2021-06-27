const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema(
  {
    orderDate: {
      type: Date,
    },
    customerName: {
      type: String,
    },

    customerContact: {
      type: Number,
    },
    orderedItem : {
        type : Array,

    },
    subTotal : {
        type : Number,
        required: [true],

    },
    
    gstAmount : {
        type : Number,

    },
    
    gstRate : {
        type : Number,

    },
    discount : {
        type : Number,

    },
    dueAmount : {
        type : Number,
        required: [true],

    },
    paidAmount : {
        type : Number,
        required: [true],

    },
    grandTotal : {
      type : Number,
      required : true
    },
    paymentType : {
        type : String
    },
    invoiceId : {
      type : Number,
      default : Date.now()
    }
    
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", schema);

module.exports = {
  Orders,
};
