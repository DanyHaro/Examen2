import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/usuario.controller'
const { checkToken } = require('../auth/tokenValidation');

router.get('/', checkToken, userCtr.readAllusuario);
router.post('/', checkToken, userCtr.createUsuario);


export default router;