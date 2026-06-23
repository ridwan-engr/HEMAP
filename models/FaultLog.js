import mongoose from "mongoose";

const faultLogSchema =
  new mongoose.Schema(
    {
      siteId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Site",
        required: true
      },

      assetType: {
        type: String,
        enum: [
          "solar",
          "battery",
          "generator",
          "grid",
          "inverter"
        ]
      },

      faultCode: {
        type: String,
        required: true
      },

      description: {
        type: String,
        required: true
      },

      severity: {
        type: String,
        enum: [
          "low",
          "medium",
          "high",
          "critical"
        ],
        default: "medium"
      },

      status: {
        type: String,
        enum: [
          "open",
          "in_progress",
          "resolved"
        ],
        default: "open"
      },

      occurrenceTime: {
        type: Date,
        default: Date.now
      },

      resolvedTime: {
        type: Date
      },

      recoveryTimeMinutes: {
        type: Number,
        default: 0
      }
    },
    {
      timestamps: true
    }
  );

export const FaultLog =
  mongoose.model(
    "FaultLog",
    faultLogSchema
  );