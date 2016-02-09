import express from 'express';
import * as degreeCtrl from '../controllers/degree';

const router = express.Router();

router.route('/')
    .get(degreeCtrl.list)
    .post(degreeCtrl.create);

router.route('/search')
    .post(degreeCtrl.search);

router.route('/:degreeId')
    .get(degreeCtrl.getOne)
    .delete(degreeCtrl.remove);

router.param('degreeId', degreeCtrl.getOne);

export default router;