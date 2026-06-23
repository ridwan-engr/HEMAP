import jwt from "jsonwebtoken";

import { env }
from "../config/env.js";

export const requireAuth =
(
  req,
  res,
  next
) => {

  try {

    const token =
      req.headers.authorization
      ?.split(" ")[1];

    if (!token) {

      return res.status(401)
      .json({
        error:
          "Token required"
      });
    }

    req.user =
      jwt.verify(
        token,
        env.jwtSecret
      );

    next();

  } catch {

    return res.status(401)
    .json({
      error:
        "Invalid token"
    });
  }
};