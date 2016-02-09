import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import { expect } from 'chai';
import app from '../src/app';




chai.config.includeStack = true;

describe('## Degree APIs', () => {
    let degree = {
        type: 'Master professionnel',
        label: 'Sciences et technologies',
        detailLabel: 'mention sciences de l\'environnement terrestre spécialité enseignement et formation en sciences de la vie et de la terre',
        duration: '2 ans',
        tutor: 'Ministère chargé de l\'Enseignement supérieur et de la Recherche',
        rnpcLevel: 'Niveau I niveau au moins égal à bac + 5'
    };

    describe('# POST /api/degrees', () => {
        it('should create a new degree', (done) => {
            request(app)
                .post('/api/degrees')
                .send(degree)
                .expect(httpStatus.OK)
                .then(res => {
                    expect(res.body.type).to.equal(degree.type);
                    expect(res.body.label).to.equal(degree.label);
                    expect(res.body.detailLabel).to.equal(degree.detailLabel);
                    expect(res.body.duration).to.equal(degree.duration);
                    expect(res.body.tutor).to.equal(degree.tutor);
                    expect(res.body.rnpcLevel).to.equal(degree.rnpcLevel);
                    degree = res.body;
                    done();
                });
        });
    });

    describe('# GET /api/degrees/:degreeId', () => {
        it('should get degree details', (done) => {
            request(app)
                .get(`/api/degrees/${degree._id}`)
                .expect(httpStatus.OK)
                .then(res => {
                    expect(res.body.type).to.equal(degree.type);
                    expect(res.body.label).to.equal(degree.label);
                    expect(res.body.detailLabel).to.equal(degree.detailLabel);
                    expect(res.body.duration).to.equal(degree.duration);
                    expect(res.body.tutor).to.equal(degree.tutor);
                    expect(res.body.rnpcLevel).to.equal(degree.rnpcLevel);
                    done();
                });
        });

        it('should report error with message - Not found, when school does not exists', (done) => {
            request(app)
                .get('/api/degrees/56c787ccc67fc16ccc1a5e9')
                .expect(httpStatus.NOT_FOUND)
                .then(res => {
                    expect(res.body.message).to.equal('Not Found');
                    done();
                });
        });
    });

    describe('# GET /api/degrees/', () => {
        it('should get all schools', (done) => {
            request(app)
                .get('/api/degrees')
                .expect(httpStatus.OK)
                .then(res => {
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    describe('# DELETE /api/degrees/', () => {
        it('should delete degree', (done) => {
            request(app)
                .delete(`/api/degrees/${degree._id}`)
                .expect(httpStatus.OK)
                .then(res => {
                    expect(res.body.type).to.equal(degree.type);
                    expect(res.body.label).to.equal(degree.label);
                    expect(res.body.detailLabel).to.equal(degree.detailLabel);
                    expect(res.body.duration).to.equal(degree.duration);
                    expect(res.body.tutor).to.equal(degree.tutor);
                    expect(res.body.rnpcLevel).to.equal(degree.rnpcLevel);
                    done();
                });
        });
    });
});