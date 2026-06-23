import mongoose from "mongoose";

const solarSchema =
  new mongoose.Schema(
    {
      siteId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Site"
      },

      capacityKW: Number,

      currentOutputKW: Number,

      irradiance: Number,

      temperature: Number
    },
    {
      timestamps: true
    }
  );

export const SolarPlant =
  mongoose.model(
    "SolarPlant",
    solarSchema
  );