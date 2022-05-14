const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    uf: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('person', User);