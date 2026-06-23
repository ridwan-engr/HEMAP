import { Router } from "express";

import {
  register,
  login,
  me
} from "../controllers/authController.js";

import {
  requireAuth
} from "../middleware/authMiddleware.js";

import {
  requireFields
} from "../middleware/validateRequest.js";

const router = Router();

router.post(
  "/register",
  requireFields(
    "name",
    "email",
    "password"
  ),
  register
);

router.post(
  "/login",
  requireFields(
    "email",
    "password"
  ),
  login
);

router.get(
  "/me",
  requireAuth,
  me
);

export default router;