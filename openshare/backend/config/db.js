require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
  // Database connection 🥳
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true});
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('Database Connection Succesful');
  }).catch(err => {
    console.log('Database Connection Failed!');
  });
}


module.exports = connectDB;
