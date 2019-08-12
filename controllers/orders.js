`use strict`

const OrderModel = require('../models/OrderModel');

exports.list = function list(req, res) {
    OrderModel.find(function (err, orders) {
        if (e) return console.log(e)
        return res.json(v);
    });
};
exports.create = function create(req, res) {
    let newOrder = new OrderModel(req.body);
    newOrder.save()
    res.json(newOrder)
};