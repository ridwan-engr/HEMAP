import { Router } from "express";

import {
  createFault,
  getFaults,
  resolveFault
} from "../controllers/faultController.js";

import {
  requireAuth
} from "../middleware/authMiddleware.js";

const router = Router();

router.get(
  "/",
  requireAuth,
  getFaults
);

router.post(
  "/",
  requireAuth,
  createFault
);

router.patch(
  "/resolve/:id",
  requireAuth,
  resolveFault
);

export default router;