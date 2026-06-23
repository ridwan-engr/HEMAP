import { Router } from "express";

import {
  createBattery,
  getBatteries
} from "../controllers/batteryController.js";

import {
  requireAuth
} from "../middleware/authMiddleware.js";

const router = Router();

router.get(
  "/",
  requireAuth,
  getBatteries
);

router.post(
  "/",
  requireAuth,
  createBattery
);

export default router;