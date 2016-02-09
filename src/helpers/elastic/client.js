import elasticsearch from 'elasticsearch';
import config from '../../config/env';

/* Basic override configuration for the elastic search client */
const client = new elasticsearch.Client({
    host: `${config.elasticsearch.host}:${config.elasticsearch.port}`,
    log: config.elasticsearch.log
});

export default client;