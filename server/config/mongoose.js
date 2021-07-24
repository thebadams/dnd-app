const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv').config();
}

mongoose.connect(process.env.MONGODB_URI, { 
  useUnifiedTopology: true,
  useNewUrlParser: true
}, () => {
  console.log('DATABASE CONNECTED');
});

module.exports = mongoose;
