const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const fs = require('fs');
const app = express();

if(process.env.NODE_ENV === 'development'){
  console.log('development mode');
  const morgan = require('morgan');
  app.use(morgan('dev'));
}
//app.use(morgan('dev'));
//check environment , development or production
//console.log(app.get('env'));
//console.log(process.env);
//here we can set NODE_ENV=development or production
// IN TERMINAL WRITE NODE_ENV=development nodemon app.js


app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// DATA
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
// );

// MIDDLEWARE
app.use((req, res, next) => {
  console.log("hello from middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTE HANDLERS


// ROUTERS
// const tourRouter = express.Router();

// TOUR ROUTES


// USER ROUTES (dummy)


// MOUNT ROUTERS
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// START SERVER
app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
