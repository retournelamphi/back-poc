import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import SchoolSchema from './schemas/school';

SchoolSchema.statics = {
    get(id){
        return new Promise((resolve, reject) => {
            this.findById(id, (errMongo, school) => {
                if (errMongo) {
                    const err = new APIError('No such school exists!', httpStatus.NOT_FOUND);
                    reject(err);
                } else if (school) {
                    resolve(school);
                }
            })
        });
    },
    list({ skip = 0, limit = 50 } = {}){
        return new Promise((resolve, reject) => {
            var result = this.find((errMongo, schools) => {
                if (errMongo) {
                    const err = new APIError('Fatal error', httpStatus.FAILURE);
                    reject(err);
                } else if (schools){
                    resolve(result);
                }
            }).skip(parseInt(skip)).limit(parseInt(limit));
        });
    }
};

export default mongoose.model('schools', SchoolSchema);