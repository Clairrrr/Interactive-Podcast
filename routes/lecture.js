var fs = require('fs');
var data = require('../data');
var lecture = require('./course');

exports.viewCourse = function(req, res) { 
  // controller code goes here 
  var name = req.params.name;
    res.render('course', {"courseName": name});
};

exports.addNote = function (req, res) {
    var note = req.query.note;
    res.json(note);
    lecture.viewLecture(req, res);
};