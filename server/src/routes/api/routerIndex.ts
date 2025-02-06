import account from './account.js'
import express from 'express';

const router = express.Router();

router.use('/account', account)


export default router