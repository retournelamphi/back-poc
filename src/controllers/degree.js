import Degree from '../models/degree';

export function getOne(req, res, next, id) {
    Degree.get(id).then(degree => {
        res.json(degree);
    }).catch(e => next(e));
}

export function list(req, res, next) {
    const { limit = 50, skip = 0 } = req.query;
    Degree.list({limit, skip}).then(degrees => res.json(degrees)).catch(e => next(e));
}

export function search(req, res, next) {
    Degree.searchOnElastic(req.body)
        .then(results => {
            res.send(results)
        })
        .catch(err => {
            next(err);
        });
}

export function create(req, res, next) {
    const degree = new Degree({
        type: req.body.type,
        label: req.body.label,
        detailLabel: req.body.detailLabel,
        duration: req.body.duration,
        tutor: req.body.tutor,
        rnpcLevel: req.body.rnpcLevel
    });

    degree.save()
        .then(savedDegree => res.json(savedDegree))
        .catch(e => next(e));
}

export function remove(req, res, next, id){
    Degree.remove(id)
        .then(deletedDegree => res.json(deletedDegree))
        .catch(e => next(e));
}