import School from '../models/school';

function getOne(req, res, next, id) {
    School.get(id).then(school => {
        res.json(school);
    }).catch(e => next(e));
}

function list(req, res, next){
    School.list().then(schools => res.json(schools)).catch(e => next(e));
}

export default {getOne, list};