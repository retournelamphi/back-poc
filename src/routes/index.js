import express from 'express';
import schoolRoutes from './school';

const router = express.Router();	// eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);

router.get('/elastic', (req, res) => {
  res.send(200);
});

// mount user routes at /schools
router.use('/schools', schoolRoutes);

export default router;