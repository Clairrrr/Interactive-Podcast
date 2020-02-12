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
    // var vid = document.getElementById("videoID");
    // data.notes.push({
    //     "content": note,
    //     "timestamp": vid.currentTime,
    // });
    // fs.writeFile("data.json", JSON.stringify(data), function (err) {
    //     if(err) {console.log("error: "+err); return;}
    //     console.log("finish writing to file");
    // });
    res.json(note);
    console.log("note "+note);
    lecture.viewLecture(req, res);
};