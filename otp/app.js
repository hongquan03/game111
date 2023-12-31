//rik.fan - chia sẻ học hỏi
const TeleBot = require('telebot');
const bot = new TeleBot('6346975177:AAHeZ_9h5GwWaUYjfnVbXRMe6s96ahQkXBE');
let configDB = require('../config/database');
let mongoose = require('mongoose');

require('mongoose-long')(mongoose); // INT 64bit
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(configDB.url, configDB.options)
    .catch(function(error) {
        if (error)
            console.log('Connect to MongoDB failed', error);
        else
            console.log('Connect to MongoDB success');
    });
bot.start();
require('./Controllers/start')(bot)
require('./Controllers/contact')(bot)
require('./Controllers/otp')