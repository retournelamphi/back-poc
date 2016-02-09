import elasticClient from './client';

/**
 * Tiny helper function which will send a ping request to the
 * elastic cluster to see whether it's up or down.
 * @returns {Promise}
 */
export function pingCluster() {
    return new Promise(function (resolve, reject) {
        elasticClient.ping({
            // ping usually has a 3000ms timeout
            requestTimeout: Infinity,
            // undocumented params are appended to the query string
            hello: "elasticsearch!"
        }, function (error) {
            resolve(error ? 'Elastic cluster is down' : 'Everything\'s fine');
        });
    });
}