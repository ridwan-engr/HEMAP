import { ApiError } from "../utils/ApiError.js";

export function notFoundHandler(
  req,
  res,
  next
) {
  next(
    new ApiError(
      404,
      `Route not found: ${req.method} ${req.originalUrl}`
    )
  );
}

export function errorHandler(
  error,
  req,
  res,
  next
) {

  if (error.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      error:
        Object.values(error.errors)[0]?.message ||
        "Validation failed"
    });
  }

  if (error.name === "CastError") {
    return res.status(400).json({
      success: false,
      error: "Invalid resource ID"
    });
  }

  if (error.code === 11000) {
    return res.status(409).json({
      success: false,
      error: "Duplicate record detected"
    });
  }

  if (error.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      error: "Invalid token"
    });
  }

  if (error.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      error: "Token has expired"
    });
  }

  const statusCode =
    error.statusCode || 500;

  const message =
    error instanceof ApiError
      ? error.message
      : "Internal Server Error";

  if (statusCode === 500) {
    console.error(error);
  }

  return res.status(statusCode).json({
    success: false,
    error: message
  });
}