import mongoose from "mongoose";

const energyRecordSchema =
  new mongoose.Schema(
    {
      siteId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Site",
        required: true
      },

      solarGenerationKWh: {
        type: Number,
        default: 0
      },

      batteryChargeKWh: {
        type: Number,
        default: 0
      },

      batteryDischargeKWh: {
        type: Number,
        default: 0
      },

      generatorGenerationKWh: {
        type: Number,
        default: 0
      },

      gridImportKWh: {
        type: Number,
        default: 0
      },

      gridExportKWh: {
        type: Number,
        default: 0
      },

      loadDemandKWh: {
        type: Number,
        default: 0
      },

      criticalLoadKWh: {
        type: Number,
        default: 0
      },

      renewableFraction: {
        type: Number,
        default: 0
      },

      recordTime: {
        type: Date,
        default: Date.now
      }
    },
    {
      timestamps: true
    }
  );

export const EnergyRecord =
  mongoose.model(
    "EnergyRecord",
    energyRecordSchema
  );