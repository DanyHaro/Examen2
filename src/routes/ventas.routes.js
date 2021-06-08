import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/ventas.controller'
// const { checkToken } = require('../auth/tokenValidation');

router.get('/', userCtr.readAllventas);
router.get('/:id', userCtr.readVenta);
router.delete('/:id', userCtr.deleteVenta);
router.post('/', userCtr.createVenta);
router.put('/:id', userCtr.updateVenta);


export default router;