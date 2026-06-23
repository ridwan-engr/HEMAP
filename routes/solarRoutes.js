import { Router } from "express";

import {
  createSolarPlant,
  getSolarPlants
} from "../controllers/solarController.js";

import {
  requireAuth
} from "../middleware/authMiddleware.js";

const router = Router();

router.get(
  "/",
  requireAuth,
  getSolarPlants
);

router.post(
  "/",
  requireAuth,
  createSolarPlant
);

export default router;