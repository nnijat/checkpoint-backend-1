`use strict`

const MessageModel = require('../models/MesssageModel');

exports.list = function list(req, res) {
    MessageModel.find(function (err, messages) {
        if (e) return console.log(e)
        return res.json(v);
    });
};
exports.create = function create(req, res) {
    let newMessage = new MessageModel(req.body);
    newMessage.save()
    res.json(newMessage)
};

