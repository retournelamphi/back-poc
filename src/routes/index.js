import express from 'express';
import schoolRoutes from './school';
import { pingCluster } from '../helpers/elastic/utils';

const router = express.Router();	// eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);

router.get('/elastic', (req, res) => {
  pingCluster().then((result) => res.send(result));
});

// mount user routes at /schools
router.use('/schools', schoolRoutes);

export default router;