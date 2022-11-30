const redis = require('redis');

const client = redis.createClient({
    url: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    legacyMode: true,
});

client.connect();

module.exports = client;