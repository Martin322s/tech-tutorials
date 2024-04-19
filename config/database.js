const mongoose = require('mongoose');
const { CONNECTION_STRING } = require('./variables');

exports.databaseConnection = () => mongoose.connect(CONNECTION_STRING);