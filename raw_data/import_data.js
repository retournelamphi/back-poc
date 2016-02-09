import csvjson from 'csvjson';
import mongoose from 'mongoose';
import config  from'../src/config/env';
import school  from '../src/models/school';
import async from 'async';

// connect to mongo db
const mongoPath = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;
mongoose.connect(mongoPath, {server: {socketOptions: {keepAlive: 1}}});

mongoose.connection.on('error', λ => {
    throw new Error(`unable to connect to database: ${config.db}`);
});

const createObjSchool = (item) => {
    return {
        type: item['type d\'établissement'],
        name: item.nom,
        acronym: item.sigle,
        status: item.statut,
        tutor: item.tutelle,
        university: item['univesité'],
        adress: item.adresse,
        zip: item['CP'],
        town: item.commune,
        department: item['département'],
        academy: item['académie'],
        region: item['région'],
        longitude: item['longitude (X)'],
        latitude: item['latitude (Y)']
    };
};

const createObjDegree = (item) => {
    return {
        type: item.type,
        label: item['libellé principal'],
        detailLabel: item['libellé complémentaire'],
        duration: item['durée'],
        tutor: item['tutelle'],
        rnpcLevel: item['niveau RNCP']
    };
};

const insertEtabSup = () => {
    console.log('insert etab_sup');
    const etab_sup = csvjson
        .toObject('./raw_data/etablissement_superieur.csv')
        .output;
    etab_sup.forEach((item) => {
        var itemMongo = createObjSchool(item);
        let schoolSchema = new school(itemMongo);
        schoolSchema.save();
    });
};


const insertEtabSecond = () => {
    console.log('insert etab_2nd ');
    const etab_secondaire = csvjson
        .toObject('./raw_data/etablissement_secondaire.csv')
        .output;
    etab_secondaire.forEach((item) => {
        var itemMongo = createObjSchool(item);
        let schoolSchema = new school(itemMongo);
        schoolSchema.save();
    });
};

const insertDegree = () => {
    console.log('insert degree');
    const degrees = csvjson
        .toObject('./raw_data/formation.csv')
        .output;
    degrees.forEach((item) => {
        var itemMongo = createObjDegree(item);
        console.log(itemMongo);
    })
};

mongoose.connection.collections['schools'].drop(λ => {
    console.log('collection schools dropped');
    mongoose.connection.collections['degrees'].drop(λ => {
        async.parallel([
            λ => insertEtabSecond(),
            λ => insertEtabSup(),
            λ => insertDegree()
        ]);
    });
});