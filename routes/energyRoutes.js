import { Router } from "express";

import {
  createEnergyRecord,
  getEnergyRecords,
  getEnergyRecord,
  updateEnergyRecord,
  deleteEnergyRecord
} from "../controllers/energyController.js";

import {
  requireAuth
} from "../middlewares/authMiddleware.js";

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

router.get(
  "/:id",
  requireAuth,
  getEnergyRecord
);

router.patch(
  "/:id",
  requireAuth,
  updateEnergyRecord
);

router.delete(
  "/:id",
  requireAuth,
  deleteEnergyRecord
);

export default router;