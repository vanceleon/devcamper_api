const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({path: './config/config.env'});

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  // res.send('<h1>Hello from express</h1>')
// res.send({"name": "Vance"})
res.status(200).json({succes:true, msg: 'Show all bootcamps'})
})
app.get('/api/v1/testing', (req, res) => {
  // res.send('<h1>Hello from express</h1>')
// res.send({"name": "Vance"})
res.status(200).json({succes:true, msg: 'Show all bootcamps'})
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`======Server running in ${process.env.NODE_ENV} mode on ${PORT}=====`));

