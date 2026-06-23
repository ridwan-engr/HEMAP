import { Router } from "express";

import {
  createReport,
  getReports,
  getReport
} from "../controllers/reportController.js";

import {
  requireAuth
} from "../middleware/authMiddleware.js";

const router = Router();

router.get(
  "/",
  requireAuth,
  getReports
);

router.get(
  "/:id",
  requireAuth,
  getReport
);

router.post(
  "/",
  requireAuth,
  createReport
);

export default router;