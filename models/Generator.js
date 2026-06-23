import mongoose from "mongoose";

const generatorSchema =
  new mongoose.Schema(
    {
      siteId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Site"
      },

      capacityKW: Number,

      fuelLevel: Number,

      runtimeHours: Number,

      status: {
        type: String,
        enum: [
          "running",
          "stopped"
        ]
      }
    }
  );

export const Generator =
  mongoose.model(
    "Generator",
    generatorSchema
  );
  