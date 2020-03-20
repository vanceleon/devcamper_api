const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// load models
const Bootcamp = require('./models/bootcamp');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read JSON Files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, `utf-8`)
);

// import into db
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(err);
  }
};

// Delete Data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log('Data Destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(err);
  }
};

// The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched. The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command line arguments.
// https://nodejs.org/docs/latest/api/process.html#process_process_argv 

// this is calling the function based on terminal input
if(process.argv[2] === '-i') {
  importData();

}else if (process.argv[2] === '-d') {
  deleteData();
}
