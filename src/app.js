import mongoose from 'mongoose';
import config from './config/env';
import app from './config/express';

// connect to mongo db
mongoose.connect(config.db, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', λ => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

const debug = require('debug')('best-degree:index');

// listen on port config.port
app.listen(config.port, λ => debug(`started server on port ${config.port}`));

export default app;