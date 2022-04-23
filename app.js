var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override') // require de metodo para sobrescrita do METHOD para fazer delete e put

// Controladores do site
var homeRouter = require('./src/routes/home');
var lojaRouter = require('./src/routes/loja');
var loginRouter = require('./src/routes/login');
var cadastroRouter = require('./src/routes/cadastro');
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var productRouter = require('./src/routes/produtos');
var usersRouter = require('./src/routes/users');
var logMiddleware = require('./middlewares/logs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')) // Sobrescrita do método method para usar delete e put
app.use(logMiddleware)

// Rotas do site
app.use('/', homeRouter);
app.use('/loja', lojaRouter);
app.use('/login', loginRouter);
app.use('/cadastro', cadastroRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/produtos', productRouter);
app.use('/users', usersRouter);

// Para chamar a pagina de não encontrado quando o usuário entrar em uma tela que 
// nao existe ou ocorrer falha nos direcionamentos das paginas
app.use((req, res) => {
  return res.status(404).render('not-found.ejs')
})

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

module.exports = app;
