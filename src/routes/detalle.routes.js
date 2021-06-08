import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/detalle.controller'
// const { checkToken } = require('../auth/tokenValidation');

router.get('/', userCtr.readAlldetalle);
router.get('/:id', userCtr.readDetalle);
router.delete('/:id', userCtr.deleteDetalle);
router.post('/', userCtr.createDetalle);
router.put('/:id', userCtr.updateDetalle);


export default router;