import mongoose from 'mongoose';
import mongoosastic from 'mongoosastic';
import elasticClient from '../../helpers/elastic/client';

let Schema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    label: {
        required: true,
        type: String
    },
    detailLabel: {
        type: String
    },
    duration: {
        type: String
    },
    tutor: {
        type: String
    },
    rnpcLevel: {
        type: String
    }
});

/* Elasticsearch mongoose configuration */
Schema.plugin(mongoosastic, {
    esClient: elasticClient
});

export default Schema;
