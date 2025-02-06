import routerIndex from './api/routerIndex.js';
import express from 'express';
const router = express.Router();
router.use('/', routerIndex);
router.get("/", (_req, _res) => {
    _res.send("Hello World!");
});
router.get("*", (_req, _res) => {
    _res.send("404 Fallback Error");
});
export default router;
