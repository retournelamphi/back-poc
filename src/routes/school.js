import express from 'express';
import schoolCtrl from '../controllers/school';

const router = express.Router();

router.route('/')
    .get(schoolCtrl.list);

router.route('/:schoolId')
    .get(schoolCtrl.getOne);

router.param(':schoolId', schoolCtrl.getOne);

export default router;