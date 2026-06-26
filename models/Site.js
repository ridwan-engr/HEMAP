import mongoose from "mongoose";

const siteSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      required: true,
      trim: true
    },

    location: {
      type: String,
      required: true,
      trim: true
    },

    state: {
      type: String,
      trim: true
    },

    latitude: {
      type: Number
    },

    longitude: {
      type: Number
    },

    siteType: {
      type: String,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export const Site = mongoose.model(
  "Site",
  siteSchema
);
