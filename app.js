
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var course = require('./routes/course');
var lecture = require('./routes/lecture');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.loginA);
app.get('/pageB', index.loginB);
// app.get('/', index.login);
app.get('/signup', index.signup);
app.get('/home', index.home_login);
app.get('/home/:name', index.home);
app.get('/profile', index.profile);
// app.get('/search', index.login);
app.get('/search/:cont', index.search);
app.get('/:home/course/:name/:quarter/:prof', course.viewCourse);
app.get('/:home/course/:courseName/:quarter/:week/:lecture/:prof', course.viewLecture);
app.get('/addNote/:courseName/:prof/:quarter/:lecture/:time', lecture.addNote);
app.get('/deleteNote/:content', lecture.deleteNote);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
