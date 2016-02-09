import mongoose from 'mongoose';
import config from './config/env';
import app from './config/express';

// connect to mongo db
const mongoPath = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;

mongoose.connect(mongoPath, {server: {socketOptions: {keepAlive: 1}}});
mongoose.connection.on('error', λ => {
    throw new Error(`unable to connect to database: ${mongoPath}`);
});

const debug = require('debug')('best-degree:index');

// listen on port config.port
app.listen(config.express.port, λ => debug(`started server on port ${config.express.port}`));

export default app;