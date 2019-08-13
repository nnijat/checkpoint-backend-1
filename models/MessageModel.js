`use strict`

const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({

    id: Number,
    name: String,
    date: String,
    message: String
});

let Message = mongoose.model('message', messageSchema);

module.exports = Message