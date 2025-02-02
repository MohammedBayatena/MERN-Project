const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add a name']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    comment : {
        type: String,
        trim: true,
        required: [true,"Please Enter a Comment for this Transaction"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
