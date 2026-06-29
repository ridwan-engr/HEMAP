import { Router } from "express";

import {
  createFault,
  getFaults,
  getFault,
  updateFaults,
  deleteFault
} from "../controllers/faultController.js";

import {
  requireAuth
} from "../middlewares/authMiddleware.js";

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
  updateFaults
);

router.get(
  "/:id",
  requireAuth,
  getFault
);

router.delete(
  "/:id",
  requireAuth,
  deleteFault
);


export default router;