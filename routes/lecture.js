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
    data['notes'][note] = req.params.time;
    var json = JSON.stringify(data);
    fs.writeFile('data.json', json);
    res.json(note);
    lecture.viewLecture(req, res);
};

exports.deleteNote = function (req, res) {
    var del = req.params.content;
    delete data['notes'][del];
    var json = JSON.stringify(data);
    fs.writeFile('data.json', json);
    lecture.viewLecture(req, res);
};