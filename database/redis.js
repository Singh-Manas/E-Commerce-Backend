// Redis is mainly used to record the session
// To install Redis we need two things - Redis Store / Redis Client
// For this we need to install 3 packages - express-session redis connect-redis
// npm install --save express-session redis connect-redis
// For using Redis in session storage, we use express-session middleware. It sets req.session.
const redis = require('redis');
const connectRedis = require('connect-redis');
const session = require('express-session');

const RedisStore = connectRedis(session); 
const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379
});

redisClient.on('Error', function (err) {
    console.error("Couldn't Connect to Redis");
});

redisClient.on('Connect', function() {
    console.log("Connected to Redis");
});

module.exports = {
    redisClient,
    RedisStore,
    session
}
