const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
const PORT = process.env.PORT || 4000;

// app.use(function (req, res) {

// });

// app.use(routes);

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.text());

// Passport
//keeps user logged in
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))
//flash is used to show a message on incorrect login
app.use(flash());
//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
	app.use(express.static(__dirname + '/client/build'));
}

mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/techannex'
);

app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;