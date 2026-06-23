import { Router } from "express";

import {
  createGenerator,
  getGenerators
} from "../controllers/generatorController.js";

import {
  requireAuth
} from "../middleware/authMiddleware.js";

const router = Router();

router.get(
  "/",
  requireAuth,
  getGenerators
);

router.post(
  "/",
  requireAuth,
  createGenerator
);

export default router;