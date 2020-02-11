const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps');


//Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

const logger = (req, res, next) => {
  req.hello = 'Hello World';
  console.log('Middleware ran');
  next();
}

app.use(logger);

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `======Server running in ${process.env.NODE_ENV} mode on ${PORT}=====`
  )
);
