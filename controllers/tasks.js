`use strict`

const TaskModel = require('../models/TaskModel');

exports.list = function list(req, res) {
    TaskModel.find((e, v) => {
        if (e) return console.log(e)
        return res.json(v);
    });
};
exports.create = function create(req, res) {
    let newTask = new TaskModel(req.body);
    newTask.save()
    res.json(newTask)
};