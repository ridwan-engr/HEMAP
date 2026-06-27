import { asyncHandler }
from "../utils/asyncHandler.js";
import { Analytics } from "../models/Analytics.js";

export const createAnalytics =
  asyncHandler(async (req, res) => {

    const analytics =
      await Analytics.create(req.body);

    res.status(201).json({
      success: true,
      count: analytics.length,
      analytics
    });
  });

export const getAnalytics =
  asyncHandler(async (req, res) => {

    const analytics =
      await Analytics.find()
      .populate("siteId");

    res.json({
      success: true,
        count: analytics.length,
      analytics
    });
  });

  export const getAnalytic = asyncHandler(async (req, res) => {
      
        const analytics = await Analytics.findById(req.params.id);
      
        if (!analytics) {
          throw new ApiError(404, "Analytics not found");
        }
      
        res.status(200).json({
          success: true,
          analytics
        });
    
      
      });

 export const updateAnalytics = asyncHandler(async (req, res) => {
  const analytics = await Analytics.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!analytics) {
    throw new ApiError(404, "Analytics not found");
  }

  res.status(200).json({
    success: true,
    message: "Analytics updated successfully",
    analytics
  });

});


export const deleteAnalytics = asyncHandler(async (req, res) => {

  const analytics = await Analytics.findByIdAndDelete(req.params.id);

  if (!analytics) {
    throw new ApiError(404, "Analytics not found");
  }

  res.status(200).json({
    success: true,
    message: "Analytics deleted successfully"
  });

});
