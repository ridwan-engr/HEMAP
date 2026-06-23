import { FaultLog }
from "../models/FaultLog.js";

import { asyncHandler }
from "../utils/asyncHandler.js";

export const createFault =
  asyncHandler(async (req, res) => {

    const fault =
      await FaultLog.create(req.body);

    res.status(201).json({
      success: true,
      fault
    });
  });

export const getFaults =
  asyncHandler(async (req, res) => {

    const faults =
      await FaultLog.find()
      .populate("siteId")
      .sort({
        occurrenceTime: -1
      });

    res.json({
      success: true,
      faults
    });
  });

export const resolveFault =
  asyncHandler(async (req, res) => {

    const fault =
      await FaultLog.findById(
        req.params.id
      );

    fault.status =
      "resolved";

    fault.resolvedTime =
      new Date();

    await fault.save();

    res.json({
      success: true,
      fault
    });
  });