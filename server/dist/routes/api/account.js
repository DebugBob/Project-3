import express from "express";
import { createUserAccount, getUserAccounts } from "../../controllers/accountController.js";
const router = express.Router();
router.route('/')
    .get(getUserAccounts)
    .post(createUserAccount);
export default router;
