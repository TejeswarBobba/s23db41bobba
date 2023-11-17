var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var watcheRouter = require('./routes/watch');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var Watch = require("./models/watches");
var resourceRouter = require('./routes/resource');
var watchesRouter = require('./routes/watches');

var app = express();

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tejeswarbobba04:Teja1997@cluster0.vzejhck.mongodb.net/?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-localmongoose");
const accountSchema = new Schema({
 username: String,
 password: String
});
accountSchema.plugin(passportLocalMongoose);
// We export the Schema to avoid attaching the model to the
// default mongoose connection.
module.exports = mongoose.model("Account", accountSchema);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/watches', watcheRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource',resourceRouter);
app.use('/watches',watchesRouter);

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var db = mongoose.connection;
//Bind connection to error event 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on 
//server start
async function recreateDB(){
 // Delete everything
 await Watch.deleteMany();
 let instance1 = new Watch({Name:"Rolex", Model :"chain", Price:15000});
 instance1.save().then(doc=>{
 console.log("First object saved")}
 ).catch(err=>{
 console.error(err)
 });

 let instance2 = new Watch({Name:"Titan", Model :"steel", Price:17000});
 instance2.save().then(doc=>{
 console.log("Second object saved")}
 ).catch(err=>{
 console.error(err)
 });

 let instance3 = new Watch({Name:"Fossil", Model :"metal", Price:18000});
 instance3.save().then(doc=>{
 console.log("Third object saved")}
 ).catch(err=>{
 console.error(err)
 });
}
let reseed = true;
if (reseed) {recreateDB();}

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
 )

module.exports = app;
