// It is used to specify endpoints related to users:
// 1. Create a new user
// 2. Delete a user
// It allows the admin to create/register more users
// ESTE ES EL ENRUTADOR
import { Router } from 'express';
const router = Router();

import * as userCtrl from '../controllers/user.controller';
import { authJwt, verifySignUp } from '../middlewares';

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted], userCtrl.createUser);

export default router;