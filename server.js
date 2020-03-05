const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to Database
connectDB();

const app = express();

// Route files
const bootcamps = require('./routes/bootcamps');

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `======Server running in ${process.env.NODE_ENV} mode on ${PORT}=====`
  )
);
