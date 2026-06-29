import { Router } from "express";

import {
  createSite,
  getSites,
  getSite,
  updateSite,
  deleteSite
} from "../controllers/siteController.js";

import {
  requireAuth
} from "../middlewares/authMiddleware.js";

const router = Router();

router.get(
  "/",
  requireAuth,
  getSites
);

router.get(
  "/:id",
  requireAuth,
  getSite
);

router.post(
  "/createSite",
  requireAuth,
  createSite
);

router.patch(
  "/:id",
  requireAuth,
  updateSite
);

router.delete(
  "/:id",
  requireAuth,
  deleteSite
);

export default router;