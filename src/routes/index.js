import express from 'express';
import schoolRoutes from './school';
import elasticClient from '../helpers/elastic/instance-factory';

const router = express.Router();	// eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);

router.get('/elastic', (req, res) => {
  elasticClient.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: Infinity,
    // undocumented params are appended to the query string
    hello: "elasticsearch!"
  }, function (error) {
    res.send(error ? 'Elastic cluster is down' : 'Everything\'s fine');
  });
});

// mount user routes at /schools
router.use('/schools', schoolRoutes);

export default router;