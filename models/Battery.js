import mongoose from "mongoose";

const batterySchema =
  new mongoose.Schema(
    {
      siteId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Site"
      },

      capacityKWh: Number,

      soc: Number,

      chargingPower: Number,

      dischargingPower: Number
    },
    {
      timestamps: true
    }
  );

export const Battery =
  mongoose.model(
    "Battery",
    batterySchema
  );