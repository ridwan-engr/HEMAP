import dotenv from "dotenv";

dotenv.config();

export const env = {
    
  port: Number(process.env.PORT || 3100),

  mongodbUri: process.env.MONGODB_URI,

  jwtSecret: process.env.JWT_SECRET,

  jwtExpiresIn:
    process.env.JWT_EXPIRES_IN || "7d",

  clientOrigin:
    process.env.CLIENT_ORIGIN || "*"
};

if (!env.mongodbUri) {
  throw new Error(
    "MONGODB_URI is missing"
  );
}

if (!env.jwtSecret) {
  throw new Error(
    "JWT_SECRET is missing"
  );
}