import config from '../../environment.json';

/**
 * Fonction qui va "générér" la configuration du projet
 * en fonction de la variable d'environnement ENV_VAR.
 * @returns {*}
 */
const generateConf = () => {
    switch (process.env.ENV_VAR) {
        case 'dev':
            return config.dev;
        case 'prod':
            return config.prod;
        case 'ci':
            return config.ci;
        default:
            return config.dev;
    }
};

export default generateConf();