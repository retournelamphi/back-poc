import mongoose from 'mongoose';
import mongoosastic from 'mongoosastic';
import elasticClient from '../../helpers/elastic/client';

let Schema = new mongoose.Schema({
    type: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    acronym: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    tutor: {
        type: String
    },
    university: {
        type: String
    },
    adress: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    academy: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    }
});

/* Elasticsearch mongoose configuration */
Schema.plugin(mongoosastic, {
    esClient: elasticClient
});

export default Schema;

