const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
var passport = require('passport');

const app = express();
const PORT = process.env.PORT || 5500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//session is used to keep the user logged in 
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))

//flash is used to show a message on an incorrect login
app.use(flash());

//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
	app.use(express.static(__dirname + '/client/build'));
}

app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/techannex',
	{
		useMongoClient: true
	}
);

app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});