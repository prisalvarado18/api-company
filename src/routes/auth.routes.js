// This file will be used for authentication
import { Router } from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller';
import { verifySignUp } from '../middlewares';

router.post('/signup', [verifySignUp.checkDuplicatedUsernameOrEmail, verifySignUp.checkRolesExisted], authCtrl.signUp);
router.post('/signin', authCtrl.signIn);

export default router;