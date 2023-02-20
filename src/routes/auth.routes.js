// This file will be used for authentication
import { Router } from 'express';
const router = Router();

router.post('/signup');
router.post('/signin');

export default router;