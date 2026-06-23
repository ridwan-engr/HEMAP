import mongoose from "mongoose";

const forecastSchema =
  new mongoose.Schema(
    {
      siteId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Site",
        required: true
      },

      forecastType: {
        type: String,
        enum: [
          "load",
          "solar",
          "wind"
        ],
        required: true
      },

      algorithm: {
        type: String,
        enum: [
          "ANN",
          "LSTM",
          "RandomForest",
          "XGBoost"
        ]
      },

      forecastValue: {
        type: Number,
        required: true
      },

      actualValue: {
        type: Number
      },

      rmse: Number,

      mae: Number,

      mape: Number,

      rSquared: Number,

      forecastTime: {
        type: Date,
        default: Date.now
      }
    },
    {
      timestamps: true
    }
  );

export const Forecast =
  mongoose.model(
    "Forecast",
    forecastSchema
  );