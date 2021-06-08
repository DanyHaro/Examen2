import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/rol.controller'
const { checkToken } = require('../auth/tokenValidation');

router.get('/', checkToken, userCtr.readAllrol);


export default router;