import mongoose from "mongoose";

const siteSchema =
  new mongoose.Schema(
    {
      siteName: {
        type: String,
        required: true
      },

      location: {
        type: String
      },

      capacityKW: {
        type: Number
      }
    },
    {
      timestamps: true
    }
  );

export const Site =
  mongoose.model(
    "Site",
    siteSchema
  );