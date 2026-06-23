import { EnergyRecord }
from "../models/EnergyRecord.js";

import { asyncHandler }
from "../utils/asyncHandler.js";

export const createEnergyRecord =
  asyncHandler(async (req, res) => {

    const record =
      await EnergyRecord.create(req.body);

    res.status(201).json({
      success: true,
      record
    });
  });

export const getEnergyRecords =
  asyncHandler(async (req, res) => {

    const records =
      await EnergyRecord.find()
      .populate("siteId")
      .sort({ recordTime: -1 });

    res.json({
      success: true,
      records
    });
  });