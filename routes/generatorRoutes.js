import { Router } from "express";

import {
  createGenerator,
  getGenerators,
  getGenerator,
  updateGenerator,
  deleteGenerator
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

router.get(
  "/:id",
  requireAuth,
  getGenerator
);

router.patch(
  "/:id",
  requireAuth,
  updateGenerator
);

router.delete(
  "/:id",
  requireAuth,
  deleteGenerator
);

export default router;