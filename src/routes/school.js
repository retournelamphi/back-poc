import express from 'express';
import * as schoolCtrl from '../controllers/school';

const router = express.Router();

router.route('/')
    .get(schoolCtrl.list)
    .post(schoolCtrl.create);

router.route('/query')
    .get(schoolCtrl.query);

router.route('/:schoolId')
    .get(schoolCtrl.getOne)
    .delete(schoolCtrl.remove);

router.param('schoolId', schoolCtrl.getOne);

export default router;