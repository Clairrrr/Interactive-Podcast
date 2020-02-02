
exports.viewCourse = function(req, res) { 
  // controller code goes here 
  var name = req.params.name;
  	console.log("The course name is: "+name);
    res.render('course', {"courseName": name});
};