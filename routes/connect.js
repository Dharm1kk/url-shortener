const mongoose = require('mongoose')
const { modelName } = require('../models/url')

async function connectToMongoDB(url){
    return mongoose.connect(url);
}

module.exports = {
    connectToMongoDB,
};