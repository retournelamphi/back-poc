import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import DegreeSchema from './schemas/degree';
import elastic from '../helpers/elastic/client';

DegreeSchema.statics = {
    get(id){
        return new Promise((resolve, reject) => {
            this.findById(id, (errMongo, degree) => {
                if (errMongo) {
                    const err = new APIError('No such degree exists!', httpStatus.NOT_FOUND);
                    reject(err);
                } else if (degree) {
                    resolve(degree);
                }
            })
        });
    },
    list({ skip = 0, limit = 50 } = {}){
        return new Promise((resolve, reject) => {
            var result = this.find((errMongo, degrees) => {
                if (errMongo) {
                    const err = new APIError('Fatal error', httpStatus.FAILURE);
                    reject(err);
                } else if (degrees) {
                    resolve(result);
                }
            }).skip(parseInt(skip)).limit(parseInt(limit));
        });
    },
    searchOnElastic(queryObj) {
        return new Promise((resolve, reject) => {
            const query_opts = {
                index: 'degrees',
                type: 'degree',
                body: {
                    query: {
                        match: queryObj
                    }
                }
            };

            elastic.search(query_opts).then(
                function (body) {
                    const hits = body.hits.hits;
                    resolve(hits);
                },
                function (error) {
                    reject(error)
                });

        })
    }
};

export default mongoose.model('degree', DegreeSchema);