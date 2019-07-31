const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/apinoderest', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;