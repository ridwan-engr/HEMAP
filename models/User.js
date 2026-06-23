import mongoose from "mongoose";

const userSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },

      email: {
        type: String,
        unique: true,
        required: true
      },

      passwordHash: {
        type: String,
        required: true,
        select: false
      },

      role: {
        type: String,
        enum: [
          "admin",
          "engineer",
          "operator"
        ],
        default:
          "operator"
      }
    },
    {
      timestamps: true
    }
  );

export const User =
  mongoose.model(
    "User",
    userSchema
  );