import { Router }
from "express";

import {createAnalytics, 
    getAnalytics,
    updateAnalytics,
    deleteAnalytics,
    getAnalytic
}
from "../controllers/analyticsController.js";

import {
  requireAuth
}
from "../middleware/authMiddleware.js";

const router =
  Router();

router.get(
  "/analytics",
  requireAuth,
  getAnalytics
);

router.post(
  "/analytics",
  requireAuth,
  createAnalytics
);

router.get(
  "/:id",
  requireAuth,
  getAnalytic
);

router.patch(
  "/:id",
  requireAuth,
  updateAnalytics
);

router.delete(
  "/:id",
  requireAuth,
  deleteAnalytics
);
export default router;