import School from '../models/school';

export function getOne(req, res, next, id) {
    School.get(id).then(school => {
        res.json(school);
    }).catch(e => next(e));
}

export function list(req, res, next) {
    const { limit = 50, skip = 0 } = req.query;
    School.list({limit, skip}).then(schools => res.json(schools)).catch(e => next(e));
}

export function query(req, res, next) {
    const queryText = req.query.text;
    School.searchOnName(queryText)
        .then(results => {
            res.send(results)
        })
        .catch(err => {
            next(err);
        });
}

export function create(req, res, next) {
    const school = new School({
        type: req.body.type,
        name: req.body.name,
        acronym: req.body.acronym,
        status: req.body.status,
        tutor: req.body.tutor,
        university: req.body.university,
        adress: req.body.adress,
        zip: req.body.zip,
        town: req.body.town,
        department: req.body.department,
        academy: req.body.academy,
        region: req.body.region,
        longitude: req.body.longitude,
        latitude: req.body.latitude
    });

    school.save()
        .then(savedSchool => res.json(savedSchool))
        .catch(e => next(e));
}

export function remove(req, res, next, id){
        School.remove(id)
            .then(deletedSchool => res.json(deletedSchool))
            .catch(e => next(e));
}