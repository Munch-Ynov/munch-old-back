import { createClient } from 'redis';

const client = createClient({
    url: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    legacyMode: true,
});

client.connect();

export default client;