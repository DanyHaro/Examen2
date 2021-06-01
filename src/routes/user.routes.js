import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'

router.get('/', userCtr.readAllUsers);
router.get('/:id', userCtr.readUser);
router.delete('/:id', userCtr.delUser);
router.post('/', userCtr.createUser);
router.put('/:id', userCtr.updateUser);


export default router;