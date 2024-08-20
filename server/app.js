const express = require('express');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

const closetsRouter = require('./core/closets/Router.js');
const usersRouter = require('./core/users/Router.js');
const reviewsRouter = require('./core/reviews/Router.js');
const ordersRouter = require('./core/orders/Router.js');
const newsRouter = require('./core/news/Router.js');

const redirect = require('./core/utils/Redirect.js');
const config = require('./core/utils/config.js');

const app = express();
const PORT = config.PORT || 5500;


app.use(express.json());
app.use(fileupload({}));
app.use(session({
  secret: config.SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: config.TIME_LIFE
  }
}));
app.use(cors('*'));

app.use(express.static("server/static"));
app.use(express.static("./client"));

app.use(redirect);
app.use('/api', closetsRouter);
app.use('/auth', usersRouter);
app.use('/comment', reviewsRouter);
app.use('/api', ordersRouter);
app.use('/api', newsRouter);

async function start(){
  try{
    app.listen(PORT, () => {
      console.log(`server work port ${PORT}`);
    });
  }catch(e){
    console.log(e);
  }
}

start();
