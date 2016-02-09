import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import { expect } from 'chai';
import app from '../src/app';

chai.config.includeStack = true;

describe('## School APIs', () => {
    let school = {
        "type": "Institut universitaire de technologie",
        "name": "IUT de Bordeaux ",
        "acronym": "",
        "status": "Public",
        "tutor": "Ministère chargé de l'Enseignement supérieur et de la Recherche",
        "adress": "35 avenue Abadie",
        "zip": "33072",
        "town": "Bordeaux",
        "department": "33 - Gironde",
        "academy": "Bordeaux",
        "region": "Aquitaine",
        "longitude": "-0.5572113",
        "latitude": "44.8438652"
    };

    describe('# POST /api/schools', () => {
        it('should create a new school', (done) => {
            request(app)
                .post('/api/schools')
                .send(school)
                .expect(httpStatus.OK)
                .then(res => {
                    expect(res.body.type).to.equal(school.type);
                    expect(res.body.name).to.equal(school.name);
                    expect(res.body.acronym).to.equal(school.acronym);
                    expect(res.body.status).to.equal(school.status);
                    expect(res.body.tutor).to.equal(school.tutor);
                    expect(res.body.university).to.equal(school.university);
                    expect(res.body.adress).to.equal(school.adress);
                    expect(res.body.zip).to.equal(school.zip);
                    expect(res.body.town).to.equal(school.town);
                    expect(res.body.department).to.equal(school.department);
                    expect(res.body.academy).to.equal(school.academy);
                    expect(res.body.region).to.equal(school.region);
                    expect(res.body.longitude).to.equal(school.longitude);
                    expect(res.body.latitude).to.equal(school.latitude);
                    school = res.body;
                    done();
                });
        });
    });

    describe('# GET /api/schools/:schoolId', () => {
        it('should get school details', (done) => {
            request(app)
                .get(`/api/schools/${school._id}`)
                .expect(httpStatus.OK)
                .then(res => {
                    expect(res.body.type).to.equal(school.type);
                    expect(res.body.name).to.equal(school.name);
                    expect(res.body.acronym).to.equal(school.acronym);
                    expect(res.body.status).to.equal(school.status);
                    expect(res.body.tutor).to.equal(school.tutor);
                    expect(res.body.university).to.equal(school.university);
                    expect(res.body.adress).to.equal(school.adress);
                    expect(res.body.zip).to.equal(school.zip);
                    expect(res.body.town).to.equal(school.town);
                    expect(res.body.department).to.equal(school.department);
                    expect(res.body.academy).to.equal(school.academy);
                    expect(res.body.region).to.equal(school.region);
                    expect(res.body.longitude).to.equal(school.longitude);
                    expect(res.body.latitude).to.equal(school.latitude);
                    done();
                });
        });

        it('should report error with message - Not found, when school does not exists', (done) => {
            request(app)
                .get('/api/schools/56c787ccc67fc16ccc1a5e9')
                .expect(httpStatus.NOT_FOUND)
                .then(res => {
                    expect(res.body.message).to.equal('Not Found');
                    done();
                });
        });
    });

    describe('# GET /api/schools/', () => {
        it('should get all schools', (done) => {
            request(app)
                .get('/api/schools')
                .expect(httpStatus.OK)
                .then(res => {
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    describe('# DELETE /api/schools/', () => {
        it('should delete school', (done) => {
            request(app)
                .delete(`/api/schools/${school._id}`)
                .expect(httpStatus.OK)
                .then(res => {
                    expect(res.body.type).to.equal(school.type);
                    expect(res.body.name).to.equal(school.name);
                    expect(res.body.acronym).to.equal(school.acronym);
                    expect(res.body.status).to.equal(school.status);
                    expect(res.body.tutor).to.equal(school.tutor);
                    expect(res.body.university).to.equal(school.university);
                    expect(res.body.adress).to.equal(school.adress);
                    expect(res.body.zip).to.equal(school.zip);
                    expect(res.body.town).to.equal(school.town);
                    expect(res.body.department).to.equal(school.department);
                    expect(res.body.academy).to.equal(school.academy);
                    expect(res.body.region).to.equal(school.region);
                    expect(res.body.longitude).to.equal(school.longitude);
                    expect(res.body.latitude).to.equal(school.latitude);
                    done();
                });
        });
    });
});