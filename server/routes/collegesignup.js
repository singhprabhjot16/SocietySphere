// /signup
// /signin

import express from 'express';
import { signup, login } from "../controllers/signup/collegeHead.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;

// /addSociety
// /'delete'