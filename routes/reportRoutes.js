import { Router } from "express";

import {
  createReport,
  getReports,
  getReport,
  updateReport,
  deleteReport
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

router.patch(
  "/:id",
  requireAuth,
  updateReport
);

router.delete(
  "/:id",
  requireAuth,
  deleteReport
);

export default router;