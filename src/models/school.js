import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import SchoolSchema from './schemas/school';
import elastic from '../helpers/elastic/client';

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
  },
  searchOnName(queryText) {
    return new Promise((resolve, reject) => {
      const query_opts = {
        index:'schools',
        type:'school',
        body: {
          query: {
            match: {
              name: queryText
            }
          }
        }
      };

      elastic.search(query_opts).then(
          function (body) {
            const hits = body.hits.hits;
            resolve(hits);
          },
          function(error) {
            reject(error)
          });

    })
  }
};

export default mongoose.model('school', SchoolSchema);