import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const SchoolSchema = new mongoose.Schema({
    type: {
        type: String
    },
    name: {
        type: String
    },
    acronym: {
        type: String
    },
    status: {
        type: String
    },
    tutor: {
        type: String
    },
    university: {
        type: String
    },
    adress: {
        type: String
    },
    zip: {
        type: String
    },
    town: {
        type: String
    },
    department: {
        type: String
    },
    academy: {
        type: String
    },
    region: {
        type: String
    },
    longitude: {
        type: String
    },
    latitude: {
        type: String
    }
});

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
    list(){
        return new Promise((resolve, reject) => {
            this.find((errMongo, schools) => {
                if (errMongo) {
                    const err = new APIError('Fatal error', httpStatus.FAILURE);
                    reject(err);
                } else if (schools) {
                    resolve(schools);
                }
            });
        });
    }
};

export default mongoose.model('schools', SchoolSchema);