var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var download = require('./modules/dowmload');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bang = require('./modules/bangnipin');
var suiji = require('./modules/suijipin');
var zizhu = require('./modules/zizhupin')
var db = require('./modules/db');
var app = express();
//加一行代码测试pm2;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//下载.doc
app.get('/download',download.file_download);
//帮你拼
app.get('/bangnipin',bang.bangnipin);
//随机拼
app.get('/suijipin',suiji.suijipin);
//自主拼
app.get('/zizhupin',zizhu.zizhupin);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
