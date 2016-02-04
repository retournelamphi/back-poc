import School from '../models/school';

function getOne(req, res, next, id) {
    School.get(id).then(school => {
        res.json(school);
    }).catch(e => next(e));
}

function list(req, res, next){
    const { limit = 50, skip = 0 } = req.query;
    School.list({ limit, skip }).then(schools => res.json(schools)).catch(e => next(e));
}

export default {getOne, list};