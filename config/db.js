const mongoose = require('mongoose');

// Mongoose.connect returns a promise 
// and can have .then() at the end of the function
const connectDB = async () => {
  // connect parameter obj is to prevent warnings in the console
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false,useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);

}

module.exports = connectDB;