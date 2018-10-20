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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());
app.use(routes);
//Serve statis assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static('/client/build'));
}

// Passport
//keeps user logged in
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))
//flash is used to show a message on incorrect login
app.use(flash());
//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
	process.env.MONGODB_URI ||
	'mongodb://localhost/techannex'
);

app.listen(PORT, () =>
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);