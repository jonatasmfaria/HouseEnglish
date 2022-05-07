var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override') // require de metodo para sobrescrita do METHOD para fazer delete e put
var session = require('express-session'); // session

// Controladores do site
var homeRouter = require('./src/routes/home');
var usuarioRouter = require('./src/routes/usuario');// nao
var clienteRouter = require('./src/routes/cliente');
var atualizarRouter = require('./src/routes/atualizar');
var lojaRouter = require('./src/routes/loja');
var loginRouter = require('./src/routes/login');
var cadastroRouter = require('./src/routes/cadastro');// nao
var indexRouter = require('./src/routes/index');// nao
var usersRouter = require('./src/routes/users');// nao
var productRouter = require('./src/routes/produtos');// nao
var usersRouter = require('./src/routes/users');// nao
var logMiddleware = require('./middlewares/logs');// nao

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


app.use(session({
  secret: `projetoExpress`,
  resave: true,
  saveUninitialized: true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')) // Sobrescrita do método method para usar delete e put
app.use(logMiddleware)

// Rotas do site
app.use('/', homeRouter);
app.use('/usuarios', usuarioRouter);// nao
app.use('/cliente', clienteRouter);
app.use('/atualizar', atualizarRouter);
app.use('/loja', lojaRouter);
app.use('/login', loginRouter);
app.use('/cadastro', cadastroRouter);// nao
app.use('/index', indexRouter);// nao
app.use('/users', usersRouter);// nao
app.use('/produtos', productRouter);// nao
app.use('/users', usersRouter);// nao

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
