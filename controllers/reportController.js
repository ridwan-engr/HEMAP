import { FaultLog }
from "../models/FaultLog.js";

import { Report }
from "../models/Report.js";

import { asyncHandler }
from "../utils/asyncHandler.js";

import { ens, recoveryTime,lolp, 
reliabilityIndex, saifi, saidi, caidi, criticalLoadServed, resilienceIndex
 } from "../services/analyticsService.js";

export const createReport =
  asyncHandler(async (req, res) => {

    const report =
      await Report.create(req.body);

    res.status(201).json({
      success: true,
      count: reports.length,
      report
    });
  });

export const getReports =
  asyncHandler(async (req, res) => {

    const reports =
      await Report.find()
      .populate("siteId")
      .sort({
        occurrenceTime: -1
      });

    res.json({
      success: true,
      count: reports.length,
      reports
    });
  });

export const getReport =
  asyncHandler(async (req, res) => {

    const report =
      await Report.findById(
        req.params.id
      );

      if (!report) {
  throw new ApiError(
    404,
    "Report not found"
  );
}

    report.status =
      "resolved";

    report.resolvedTime =
      new Date();

    await report.save();

    res.json({
      success: true,
      count: reports.length,
      report
    });
  });

export const updateReport = asyncHandler(async (req, res) => {

  const report = await Report.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!report) {
    throw new ApiError(404, "Report not found");
  }

  res.status(200).json({
    success: true,
    message: "Report updated successfully",
    report
  });

});

// Delete Site
export const deleteReport = asyncHandler(async (req, res) => {

  const report = await Report.findByIdAndDelete(req.params.id);

  if (!report) {
    throw new ApiError(404, "Report not found");
  }

  res.status(200).json({
    success: true,
    message: "Report deleted successfully"
  });

});
  