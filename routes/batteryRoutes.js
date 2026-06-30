import { Router } from "express";

import {
  createBattery,
  getBatteries,
  getBattery,
  deleteBattery,
  getBatteryDashboard,
  getLiveBattery,
  getBatteryTrend,
  getBatteryHealth,
  getBatteryRuntime,
  getBatteryEfficiency,
  getBatterySite,
  updateBattery
} from "../controllers/batteryController.js";

import {
  requireAuth
} from "../middlewares/authMiddleware.js";

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

router.get(
  "/:id",
  requireAuth,
  getBattery
);

router.patch(
  "/:id",
  requireAuth,
  updateBattery
);

router.delete(
  "/:id",
  requireAuth,
  deleteBattery
);

router.get("/", getBatteryDashboard);

router.get("/live", getLiveBattery);

router.get("/trend", getBatteryTrend);

router.get("/health", getBatteryHealth);

router.get("/runtime", getBatteryRuntime);

router.get("/efficiency", getBatteryEfficiency);

router.get("/site/:siteName", getBatterySite);

export default router;