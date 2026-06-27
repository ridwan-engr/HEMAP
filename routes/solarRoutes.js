import { Router } from "express";

import {
  createSolarPlant,
  getSolarPlants,
  getSolarPlant,
  updateSolarPlant,
  deleteSolarPlant
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

router.get(
  "/:id",
  requireAuth,
  getSolarPlant
);

router.post(
  "/",
  requireAuth,
  createSolarPlant
);

router.patch(
  "/:id",
  requireAuth,
  updateSolarPlant
);

router.delete(
  "/:id",
  requireAuth,
  deleteSolarPlant
);
export default router;