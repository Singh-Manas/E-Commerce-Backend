// For using MongoDB, we need MongoDB and Mongoose
// npm install --save mongodb mongoose

var mongoose = require('mongoose');

var mongodb = 'monodb://127.0.0.1/my_database';
mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('Error', console.error.bind(console, "Mongodb Connection Error"));
