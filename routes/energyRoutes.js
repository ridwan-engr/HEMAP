import { Router } from "express";

import {
  createEnergyRecord,
  getEnergyRecords
} from "../controllers/energyController.js";

import {
  requireAuth
} from "../middleware/authMiddleware.js";

const router = Router();

router.get(
  "/",
  requireAuth,
  getEnergyRecords
);

router.post(
  "/",
  requireAuth,
  createEnergyRecord
);

export default router;